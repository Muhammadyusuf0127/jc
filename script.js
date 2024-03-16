var a = +prompt("1dan 5gacha son kriting")
let box=1
for (let i = 1 ; i < 6; i++) {
    box = box*i
    a = +prompt("Iltimos son kiriting");
    console.log(box);
} 


var son = +prompt("Istalgan sonni kiriting:");

while (son === null && son === "" && isNaN(son)) {
  son = +prompt("Bu son emas. Iltimos, qayta kiriting:");
}

son = Number(son);

if (son % 2 === 0) {
 son = +prompt ("Bu son juft.");
} else {
  son = +prompt("Bu son toq.");
}
console.log(son)