var extensions = require('./contract-extensions.js');
var solidityHandler = require('./handlers/ethereum/solidity-handler');

function getFileContent(fileName, contractsPath) {
    var contractContent = extensions.readContractContent(fileName, contractsPath);  

    return {
        title: extensions.getContractNameWithoutExtension(fileName),
        content: contractContent,
        compiled: solidityHandler.compileContract(contractContent)
    }
}

class ContractManager {
    constructor(contractsPath, fileExtension) {
        this.contractsPath = contractsPath;
        this.files = extensions.getContracts(fileExtension, contractsPath);
    }

    existsAnyFile() {
        return this.files.length > 0;
    }

    getContent() {
        var filesContent = [];

        this.files.forEach((file) => {
            var content = getFileContent(file, this.contractsPath);

            filesContent.push(content);
        });
        
        return filesContent;
    }
}

module.exports = ContractManager;
