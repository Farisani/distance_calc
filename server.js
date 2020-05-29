const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const checkJsonFileValidity = require('./checkValidity/checkValidity.js');
const sortJsonDataByDistance = require('./sortByDistance/sortByDistance.js');
const checkShortestJsonData = require('./checkShortestDistance/checkShortestDistance.js');

const dataJsonString = require('./domain/data.json');
const geoJsonString = require('./domain/geo.json');

if (checkJsonFileValidity(dataJsonString)  && checkJsonFileValidity(geoJsonString)) {
    const server = app.listen(3001, () => {

        sortJsonDataByDistance('51.49934', '0.01442');
        checkShortestJsonData('51.49934', '0.01442');

        console.log('listening on port %s...', server.address().port);
    });   
} else {
    console.log('files are not valid');
}