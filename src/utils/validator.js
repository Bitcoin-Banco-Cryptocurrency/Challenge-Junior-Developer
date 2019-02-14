function isEmpty(string) {
    return string === null || string == undefined || string.trim() === '';
}

function isNotEmpty(string) {
    return !isEmpty(string);
}

function isNotFunction(func) {
    return typeof func !== 'function'
}

module.exports = {
    isNotEmpty,
    isEmpty,
    isNotFunction
}

