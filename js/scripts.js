

//take user input
//convert user input to string
//END USER LOGIC

//BEGIN BUSINESS LOGIC
//assign results to var sentenceBefore
//remove punctuation, spaces
var sentenceBefore = "don't compare yourself to others, compare yourself to the person you were yesterday".replace(/[.,\/#!$%\^&\*;:'{}=\-_`~()]/g,"").replace(/ /g, '');

var sentenceDuring = sentenceBefore;
console.log("sentence before: ", sentenceDuring)

//count characters
var sentenceDuring = sentenceDuring.length;

//pop off the first 9 letters, index 0-8, into a new array
var sentenceFirstArray = [sentenceBefore]
console.log("sentence as array: ", sentenceFirstArray)














var cryptoSquare = function(sentenceBefore) {
  if (sentenceBefore !== sentenceDuring)
  return true;
}


































// var cryptoSquare = function(letter) {
//   if (letter === " ") {
//     return true;
//   } else if(letter.upperCase) {
//     return false;
//   } else {
//     return true;
//   }
// };
