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

var contracts = contractManager.getContent();
var configManager = new ConfigManager(contracts);

configManager.createConfigFiles();
