const sortJsonDataByDistance = require('./../sortByDistance/sortByDistance.js');

module.exports = function checkShortestJsonData (latitude , longitude) {
    const geoData = sortJsonDataByDistance(latitude, longitude);
    return geoData[0];
}