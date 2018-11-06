const fs = require('fs');
const chars = {characters: []};



fs.readFile('./got_characters.json', 'utf-8', function (err, jsonStr) {
    if (err) throw err;
    const options = {
        "columns": true,
        "auto_parse": true,
        "auto_parse_date": false
    };

});

