var fs = require('fs');
var es = require('event-stream');
var JSONStream = require('JSONStream');

fs.createReadStream('input/input.txt')      // Read File
  .pipe(es.replace(/[,!?()=:"\.\d]/gm, '')) // remove punctuation and digits
  .pipe(es.replace(/\s\s*\b/gm, ' '))       // remove extra whitespace from body
  .pipe(es.replace(/^\s*/gm, ''))           // remove extra whitespace from beginning of text to get rid of empty arrays
  .pipe(es.split(' '))                      // split the text in an array
  .pipe(JSONStream.stringify())             // Stringify the array
  .pipe(fs.createWriteStream("output/output.json"));  // Write the new file
