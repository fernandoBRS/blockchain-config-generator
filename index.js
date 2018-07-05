const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fileManager = require('./lib/file-manager');

// console.log(
//     chalk.green(
//         figlet.textSync('BlockGen', { horizontalLayout: 'full' })
//     )
// );

if (!fileManager.existsFileWithExtension('.sol')) {
    console.log(chalk.red('No solidity file found in this directory!'));
    process.exit();
}
