/* leer un archivo txt línea por línea para identificar si hay CURPS*/

const readline = require('readline'),
       fs = require ('fs'),
       fileName = 'file.txt';

let reader = readline.createInterface ({
    input: fs.createReadStream(fileName)
});

reader.on('line', line => {
    
    console.log('tenemos un curp:', line)
});