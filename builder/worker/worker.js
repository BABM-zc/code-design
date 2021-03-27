const { isMainThread, parentPort } = require('worker_threads');
const process = require('child_process');

if (isMainThread) {
    throw new Error('Its not a worker');
}
    

    
parentPort.on('message', (command) => {
    process.exec(command, (error, stdout, stderr) => {
        if (error) {
            log.error('exec error: ', error);
        } else {
            console.log(stdout);
        }
    })
});