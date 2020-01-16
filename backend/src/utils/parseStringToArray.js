module.exports = function parseStrinToArray(arrayAsAsString){
    return arrayAsAsString.split(',').map(tech=> tech.trim());
};