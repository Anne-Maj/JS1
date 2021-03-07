var fs = require('fs');  

var fileName = process.argv[2];

var bufferFile = fs.readFileSync(fileName);

var stringFile = bufferFile.toString();

var count = stringFile.split('\n');

console.log(count.length-1);


 