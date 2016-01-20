

//take user input
//convert user input to string
//END USER LOGIC

//BEGIN BUSINESS LOGIC
//assign results to var sentenceBefore
//remove punctuation, spaces
var sentenceBefore = "don't compare yourself to others, compare yourself to the person you were yesterday".replace(/[.,\/#!$%\^&\*;:'{}=\-_`~()]/g,"").replace(/ /g, '');

//sentence w/o spaces and punct
var sentenceCount = sentenceBefore;
console.log("sentence before: ", sentenceCount)

// sentenceCount.shift()
// return array1




//shift items out of array
var sentenceChop = sentenceCount.shift();
console.log("letters in 1st array: ", sentenceChop)




// //sentenceDuring into new array
// var sentenceArray = [sentenceBefore]
// console.log("sentence as array: ", sentenceArray)


















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
