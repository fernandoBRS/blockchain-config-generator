const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
var ContractManager = require('./lib/contract-manager');
var ConfigManager = require('./lib/config-manager');

// clear();
// console.log(
//     chalk.green(
//         figlet.textSync('BlockGen', { horizontalLayout: 'full' })
//     )
// );

var contractManager = new ContractManager('.sol');

if (!contractManager.existsAnyFile()) {
    console.log(chalk.red('No solidity file found in this directory!'));
    process.exit();
} 

console.log(chalk.green('Creating config files...'));

var contracts = contractManager.getContent();
var configManager = new ConfigManager(contracts);

configManager.createConfigFiles();

console.log(chalk.green('Done!'));
