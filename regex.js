const text = "The quick brown fox jumps over the lazy dog.";

//******this match is a literal string "quick"**********

const pattern = /quick/;
const matches = text.match(pattern);
console.log(matches);  
// answer: ['quick']


 // **********vowel character*********
const pattern = /[aeiou]/g;
const matches = text.match(pattern);
console.log(matches); 
// answer: ['e', 'u', 'i', 'o', 'u', 'o', 'e', 'a', 'o']

//********Escape Sequences*********
const text = "I bought 10 apples for $5.99 each.";

// matching the dollar sign ($)
const pattern = /\$/g;
const matches = text.match(pattern);
console.log(matches);  
// answer: ['$']

// match a number followed by a period right afterword
const pattern2 = /\d\./g;
const matches2 = text.match(pattern2);
console.log(matches2);  
// answer: ['5.']


