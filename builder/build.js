const fs = require('fs');
const log = require('./log');
const path = require('path');
const process = require('child_process');
const thread = require('./worker/worker_thread_pool');

/**
 * 当前文件名称
 */
const scriptName = path.basename(__filename);

const commands = new Map(); // 命令列表

/**
 * 输出源
 */
function consoleLog(error, stdout, stderr) {
    if (error) {
        log.error('exec error: ', error);
    } else {
        if (stdout !== 'https://registry.npm.taobao.org/\n') {
            log.warn('The current source is not a domestic source, which may cause slow downloading!', scriptName);
            log.info('------------------------------------------', scriptName);
            log.info('Taobao mirror will be set up for you soon!', scriptName);
            // 设置完成，再次检测是否符合要求
            process.exec('npm config get registry', consoleLog);
        } else {
            log.success('Currently Taobao mirror!', scriptName);
        }
    }
}

/**
 * 检测源
 */
function checkRegistry() {
    process.exec('npm config get registry', consoleLog);
}

/**
 * 检查node modules
 */
function checkNodeModules() {
    // 检测文件是否存在
    const result = fs.existsSync('node_modules');
    // 标记需要install
    if (result === false) {
        log.warn('node_modules folder does not exist!', scriptName)
    } else {
        log.info('node_modules folder already exists!', scriptName);
    }
}
/**
 * 读取packagejson文件生成安装命令
 */
function createCommands() {
    try {
        const packageList = fs.readFileSync('./package.json', 'utf8');
        const dependencies = JSON.parse(packageList)['dependencies'];
        // 获取对应的key
        const dependencyKeys = Object.keys(dependencies)
        dependencyKeys.forEach((key) => {
            const versionStr = dependencies[key];
            if (versionStr) {
                const version = versionStr.replace('^', '');
                // 生成安装依赖命令
                commands.set(key, `npm install ${key}@${version}`);
            }
        });
        log.info('Command generation completed!', scriptName);
    } catch (err) {
        log.error(err, scriptName)
    }
}

function deleteSecondFileNames(fileName) {
    const secondFileNames = fs.readdirSync(`./node_modules/${fileName}`, 'utf8');
    secondFileNames.forEach((secondFileName) => {
        const name = `${fileName}/${secondFileName}`;
        if (commands.has(name)) {
            commands.delete(name);
            log.info(`Eliminate existing dependencies ${name}`, scriptName);
        }
    })
}

/**
 * 暂时只支持二级文件检测
 */
function checkFiles() {
    // 如果存在才开启检查
    log.info('——————————Start to detect dependencies——————————', scriptName);
    if (fs.existsSync('node_modules')) {
        const fileNames = fs.readdirSync('./node_modules', 'utf8');
        for (let i = 0; i < fileNames.length; i++) {
            // 二级文件处理
            switch (fileNames[i]) {
                case '@types':
                    deleteSecondFileNames(fileNames[i]);
                    break;
                case '@testing-library':
                    deleteSecondFileNames(fileNames[i]);
                    break;
            }
            // 是否包含对应的图
            if (commands.has(fileNames[i])) {
                commands.delete(fileNames[i]);
                log.info(`Eliminate existing dependencies ${fileNames[i]}`, scriptName);
            }
        }
    }
    log.info('—————————Dependency detection completed—————————', scriptName);
}

function installDependencies() {
    if (commands.keys().length > 0) {
        // 安装依赖
        log.info('Start to install dependencies', scriptName)
        commands.forEach((command) => {
            process.exec(command, (error, stdout, stderr) => {
                if (error) {
                    log.error('exec error: ', error);
                } else {
                    console.log(stdout);
                }
            })
        })
        log.info('Dependency installation is complete', scriptName)
    } else {
        log.success('The dependencies are complete and do not need to be installed again!', scriptName)
    }
}

// --------------------------------------------
function workThread() {
    const pool = new thread.WorkerPool(path.join(__dirname, './worker/worker.js'), 4)
    if (commands.keys()) {
        // 安装依赖
        log.info('Start to install dependencies', scriptName)
        Promise.all(commands.forEach(async (command, i) => {
            const res = await pool.run(command);
            console.log(`任务${i}完成结果:`, res);
        })).then(() => {
            console.log('所有任务完成 !');
            // 销毁线程池
            pool.destroy();
            log.info('Dependency installation is complete', scriptName)
        });
    } else {
        log.success('The dependencies are complete and do not need to be installed again!', scriptName)
    }
}
// --------------------------------------------


function run() {
    process.exec('npm run start', 'utf8' , (error, stdout, stderr) => {
        if (error) {
            log.error('exec error: ', error);
        } else {
            console.log(stdout);
        }
    })
}

function start() {
    // 检测源
    checkRegistry();
    // 是否需要安装
    checkNodeModules();
    // 生成所有命令
    createCommands();
    // 检查文件，修正命令
    checkFiles();
    // 安装依赖
    workThread();
    // start
    // run()

}

start();
