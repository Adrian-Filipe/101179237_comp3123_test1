let fs = require('fs');
let mk = require('path')
let logFile = fs.readFileSync('logs.txt', 'utf8');

function removeLogs() {
    if(fs.readdirSync('./logs')){
        deleteFolderRecursive('./logs');
    }
}

function createLogDirectory() {
    if(fs.readdirSync('./logs' = false)){
        fs.mkdirSync(process.cwd() + './logs');
    }
}

