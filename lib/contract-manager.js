var extensions = require('./contract-extensions.js');
var solidityHandler = require('./handlers/ethereum/solidity-handler');

function getFileContent(fileName) {
    var contractContent = extensions.readContractContent(fileName);  

    return {
        title: extensions.getContractNameWithoutExtension(fileName),
        content: contractContent,
        compiled: solidityHandler.compileContract(contractContent)
    }
}

class ContractManager {
    constructor(fileExtension) {
        this.files = extensions.getContracts(fileExtension);
    }

    existsAnyFile() {
        return this.files.length > 0;
    }

    getContent() {
        var filesContent = [];

        this.files.forEach(function (file) {
            var content = getFileContent(file);

            filesContent.push(content);
        });

        return filesContent;
    }
}

module.exports = ContractManager;
