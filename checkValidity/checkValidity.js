module.exports = function checkJsonFileValidity(filePath) {
    try {
        //checking if its valid json content
        JSON.parse(JSON.stringify(filePath))
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

