const fs = require('fs');

console.log('A');

fs.readFile('./got_characters.json', 'utf-8', function(error, jsonStr) {
  const characters = JSON.parse(jsonStr);

  console.log(`jsonStr length is ${jsonStr}`);
  console.log(`Number of characters? ${characters.length}`);
  console.log(`Name of first character? ${characters[0].name}`);
  console.log(`House of second character? ${characters[1].house}`);
});

console.log('B');
