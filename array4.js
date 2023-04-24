const b = "5,4,3,2,1";
const numbers = b.split(",");
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += parseInt(numbers[i]);
}
console.log(sum);