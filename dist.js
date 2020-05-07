const ncp = require('ncp').ncp;
const fs = require('fs');

const libs = ['handsontable\\dist'];

if (!fs.existsSync(process.cwd() + '\\dist')) {
    fs.mkdirSync(process.cwd() + '\\dist');
}
if (!fs.existsSync(process.cwd() + '\\dist\\Libs')) {
    fs.mkdirSync(process.cwd() + '\\dist\\Libs');
}

// # libs
for (let iL = 0; iL < libs.length; iL++) {
    const lib = libs[iL];
    console.log('\n %%% update [' + lib + ']!');
    const paths = lib.split('\\');
    // sub folders
    let current = process.cwd() + '\\dist\\Libs\\';
    for (let ip = 0; ip < paths.length; ip++) {
        const path = paths[ip];
        current = current + path + '\\';
        if (!fs.existsSync(current)) {
            fs.mkdirSync(current);
        }
    }
    // copy
    ncp(
        process.cwd() + '\\node_modules\\' + lib,
        process.cwd() + '\\dist\\Libs\\' + lib,
        (err) => {
            if (err) {
                return console.error(err)
            }
        }
    );
}