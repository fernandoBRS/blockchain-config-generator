const fs = require('fs');
const path = require('path');

function containsExtension(element, fileExtension) {
    var extName = path.extname(element);
    return extName === fileExtension; 
};

function getDirectoryFiles() {
    return fs.readdirSync(process.cwd());
}

module.exports = {
    getCurrentDirectoryBase : () => {
        return path.basename(process.cwd());
    },

    existsFileWithExtension : (fileExtension) => {
        var directoryFiles = getDirectoryFiles();
        return directoryFiles.some(x => containsExtension(x, fileExtension));
    }
};
