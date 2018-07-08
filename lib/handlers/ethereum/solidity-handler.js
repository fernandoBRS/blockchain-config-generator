const solc = require('solc');

module.exports = {
    compileContract: function(contractContent) {
        // 1 = number of different contracts to be compiled
        return solc.compile(contractContent, 1);
    }
};

