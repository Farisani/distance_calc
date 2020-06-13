const sortJsonDataByDistance = require("./../sortByDistance/sortByDistance.js");

module.exports = function checkShortestJsonData(latitude, longitude) {
  const geoData = sortJsonDataByDistance(latitude, longitude);

  const checkIpAddress = geoData[0].ipv4;

  const data = require("./../domain/data.json");

  for (let i = 0; i < data.length; i++) {
    //console.log('My Ip adress for comparison',getIpAddress(data[i].meta));

    let ip = getIpAddress(data[i].meta)
    if (checkIpAddress === ip[0]) {
      console.log("The shortest distance is : ", ip.input)
      console.log("The shortest distance is : ",data[i])
      
      return data[i];
    }
  }

  return null;
};

function getIpAddress(metaData) {
  let myRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
  let ip = metaData.match(myRegex);
  return ip;
}
