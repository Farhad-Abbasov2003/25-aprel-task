let birthdays = ["08-14", "10-04", "04-21", "08/14", "10/04", "04/21"];

for (let i = 0; i < birthdays.length; i++) {

  birthdays[i] = birthdays[i].replace(/-/g, "/");
}

console.log(birthdays);