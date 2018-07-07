var extensions = require("./contract-extensions.js");

function getFileContent(fileName) {
    var contractTitle = extensions.getContractNameWithoutExtension(fileName);
    var contractPath = extensions.getContractPath(fileName);

    return {
        title: extensions.getContractNameWithoutExtension(fileName),
        content: extensions.readContractContent(contractPath)
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
