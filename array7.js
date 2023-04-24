let sentence = "Programming Principles";
let number = 0;
let lowerCase = 'p';
let upperCase = 'P';
for (let i = 0; i < sentence.length; i++) {
  if (lowerCase === sentence[i]  || upperCase === sentence[i]) number++;
}
console.log(number);