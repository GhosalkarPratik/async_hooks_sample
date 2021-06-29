const { localStorage } = require('./hooks_service');
const {file2} = require('./file2')

module.exports = {
    file1,
}

function file1() {
    const ran1 = localStorage.get();

    const ran2 = file2();

    return ran1 === ran2;
}