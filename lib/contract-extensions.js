const fs = require('fs');
const path = require('path');

function getDirectoryFiles() {
    return fs.readdirSync(process.cwd());
}

function containsExtension(element, fileExtension) {
    return path.extname(element) === fileExtension; 
}

module.exports = {
    getContracts: function(fileExtension) {
        var directoryFiles = getDirectoryFiles();
        return directoryFiles.filter(x => containsExtension(x, fileExtension));
    },
    
    readContractContent: function(fileName) {
        var contractPath = `${process.cwd()}/${fileName}`;
        return fs.readFileSync(contractPath, 'utf8');
    },
    
    getContractNameWithoutExtension: function(fileName) {
        return fileName.substr(0, fileName.lastIndexOf('.'));
    }
};
