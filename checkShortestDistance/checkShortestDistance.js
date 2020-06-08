const sortJsonDataByDistance = require('./../sortByDistance/sortByDistance.js');

module.exports = function checkShortestJsonData (latitude , longitude) {
    const geoData = sortJsonDataByDistance(latitude, longitude);

    const checkIpAddress = geoData[0].ipv4;

    const data = require('./../domain/data.json');

    for (var i = 0; i < data[0].length; i++) {
        if (checkIpAddress === getIpAddress(data[i].meta)) {
            return data[1];
        }
    }

    return null;
}

function getIpAddress(metaData) {
    return metaData.match("\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b");
}