//fetches secret key form file

const fs = require('fs');
var secret = '';

fs.readFile('./secret.txt', 'utf-8', function(err, key){
    if(err) console.log(err);

    console.log(key);
    module.exports = key;
});