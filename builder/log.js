
/**
 * 颜色定义
 */
const color = {
    'bright'    : '\x1B[1m', // 亮色
    'grey'      : '\x1B[2m', // 灰色
    'italic'    : '\x1B[3m', // 斜体
    'underline' : '\x1B[4m', // 下划线
    'reverse'   : '\x1B[7m', // 反向
    'hidden'    : '\x1B[8m', // 隐藏
    'black'     : '\x1B[30m', // 黑色
    'red'       : '\x1B[31m', // 红色
    'green'     : '\x1B[32m', // 绿色
    'yellow'    : '\x1B[33m', // 黄色
    'blue'      : '\x1B[34m', // 蓝色
    'magenta'   : '\x1B[35m', // 品红
    'cyan'      : '\x1B[36m', // 青色
    'white'     : '\x1B[37m', // 白色
    'blackBG'   : '\x1B[40m', // 背景色为黑色
    'redBG'     : '\x1B[41m', // 背景色为红色
    'greenBG'   : '\x1B[42m', // 背景色为绿色
    'yellowBG'  : '\x1B[43m', // 背景色为黄色
    'blueBG'    : '\x1B[44m', // 背景色为蓝色
    'magentaBG' : '\x1B[45m', // 背景色为品红
    'cyanBG'    : '\x1B[46m', // 背景色为青色
    'whiteBG'   : '\x1B[47m', // 背景色为白色
    'END' : '\x1B[0m', // 结束
};

/**
 * 警告
 * @param {string} content 日志正文
 * @param {string} module 日志模块
 */
function warn(content, module) {
    console.warn(
        `${color['magenta']}[time] ${new Date()}  [warn] --- [main] ${module} : ${content} ${color['END']}`
    );
}
/**
 * 日志
 * @param {string} content 日志正文
 * @param {string} module 日志模块
 */
function log(content, module) {
    console.log(
        `[time] ${new Date()}  [log] --- [main] ${module} : ${content}`
    );
}
/**
 * 信息
 * @param {string} content 日志正文
 * @param {string} module 日志模块
 */
function info(content, module) {
    console.info(
        `${color['bright']}[time] ${new Date()}  [info] --- [main] ${module} : ${content} ${color['END']}`
    );
}
/**
 * 错误
 * @param {string} content 日志正文
 * @param {string} module 日志模块
 */
function error(content, module) {
    console.error(
        `${color['red']}[time] ${new Date()}  [error] --- [main] ${module} : ${content} ${color['END']}`
    );
}
/**
 * 成功
 * @param {string} content 日志正文
 * @param {string} module 日志模块
 */
function success(content, module) {
    console.log(
        `${color['green']}[time] ${new Date()}  [success] --- [main] ${module} : ${content} ${color['END']}`
    );
}

/**
 * 导出模块
 */
module.exports = {
    warn,
    log,
    info,
    error,
    success
}