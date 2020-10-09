const express = require('express');
const app = express();
const lcw = require('./question-1/lowerCaseWords')

app.get('/', (req, res) => {
    let query;
    let newArray = lowerCaseWords(mixedArray);
    for(i in newArray){
        query += '<p>' + i + '</p>'
    }
    console.log(query)
})

var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port
})