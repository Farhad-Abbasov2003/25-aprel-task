let sentence = "introduction to algorithms";
let capitalizedSentence = sentence.replace(/\b\w/g, char => char.toUpperCase());
console.log(capitalizedSentence);