var input = "4 Every Dog Must Have His 66 Every Day,";

var lorem = function(text) {
  var textArray = input.split(' ');

  for (var i = textArray.length - 1; i >= 0; i--) {
    if (textArray[i].match(/(\d+)$/)) {
      textArray.splice(i, 1);
    }
  }

  // return textArray;
  var textObj = {
    allWords: textArray
  };

  return textObj;

};

output = lorem(input);

var fs = require('fs');
fs.writeFile("output.json", JSON.stringify(output), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
