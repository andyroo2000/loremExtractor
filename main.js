var input = "4 Every Dog Must Have His 66 Every Day,";


var extractor = {
  isNumber: function(element) {
    if (element.match(/(\d+)$/)) {
      return true;
    }
  },
  lorem: function(text) {
    var textArray = input.split(' ');

    for (var i = textArray.length - 1; i >= 0; i--) {
      if (this.isNumber(textArray[i])) {
        textArray.splice(i, 1);
      }
    }

    var textObj = {
      allWords: textArray
    };

    return textObj;
  }
};

output = extractor.lorem(input);

var fs = require('fs');
fs.writeFile("output.json", JSON.stringify(output), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
