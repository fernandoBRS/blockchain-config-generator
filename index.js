const chalk = require('chalk');
var ContractManager = require('./lib/contract-manager');
var ConfigManager = require('./lib/config-manager');

var path = process.cwd();
var contractManager = new ContractManager(path, '.sol');

if (!contractManager.existsAnyFile()) {
    console.log(chalk.red('No solidity file found in this directory!'));
    process.exit();
} 

console.log(chalk.green('Creating config files...'));

var contracts = contractManager.getContent();
var configManager = new ConfigManager(path, contracts);

configManager.createConfigFiles();

console.log(chalk.green('Done!'));
