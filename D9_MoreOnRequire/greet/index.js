// we can have multiple files within the greet folder and have them all require each other
var english = require("./english");
var spanish = require("./spanish");

//export with object attached with method
// name value pair {name of property: value/var name}
module.exports = {
  english: english,
  spanish: spanish
};
