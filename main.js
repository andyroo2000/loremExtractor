var input = "4 Every dog Must, Have his 66 Every Day!";

var extractor = {
  // returns true if there is a digit present
  isNumber: function(element) {
    if (element.match(/(\d+)$/)) {
      return true;
    }
  },

  // returns an object containing arrays of text
  lorem: function(text) {
    var textArray = input.split(' ');
    for (var i = textArray.length - 1; i >= 0; i--) {
      // remove punctuation
      textArray[i] = textArray[i].replace(/[,!?()]/gm, '');

      // remove strings that contain digits
      if (this.isNumber(textArray[i])) {
        textArray.splice(i, 1);
      }
    }
    return textArray;
  }
};

// sets the output
output = extractor.lorem(input);

// writes the output to a file
var fs = require('fs');
fs.writeFile("output.json", JSON.stringify(output), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
