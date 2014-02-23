var input = "4 Every dog   Must,  Have his 66 Every Day!";

var lorem = function(text) {
  // remove punctuation and digits
  text = text.replace(/[,!?()\d]/gm, '');
  // remove extra whitespace from body
  text = text.replace(/\s\s*\b/gm, ' ');
  // remove whitespace from beginning of text so that there aren't empty array items
  text = text.replace(/^\s*/gm, '');
  return text.split(' ');
};

// sets the output
var output = lorem(input);

// writes the output to a file
var fs = require('fs');
fs.writeFile("output.json", JSON.stringify(output), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
