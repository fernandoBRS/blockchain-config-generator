const fs = require('fs');
const path = require('path');

function getDirectoryFiles(contractsPath) {
    return fs.readdirSync(contractsPath);
}

function containsExtension(element, fileExtension) {
    return path.extname(element) === fileExtension; 
}

module.exports = {
    getContracts: function(fileExtension, contractsPath) {
        var directoryFiles = getDirectoryFiles(contractsPath);
        return directoryFiles.filter(x => containsExtension(x, fileExtension));
    },
    
    readContractContent: function(fileName, contractsPath) {
        var contractPath = `${contractsPath}/${fileName}`;
        return fs.readFileSync(contractPath, 'utf8');
    },
    
    getContractNameWithoutExtension: function(fileName) {
        return fileName.substr(0, fileName.lastIndexOf('.'));
    }
};
