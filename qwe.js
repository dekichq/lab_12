// //Завдання 1
// let x = 1;
// let y = 2;

// let res1 = String(String(x)+String(y));
// console.log(res1); // "12"
// console.log(typeof res1); // "string"
// let res2 = String(Boolean(x)+String(y)); // Допишіть код (використовувати змінні x і y)
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"
// let res3 = Boolean(x + y);// Допишіть код (використовувати змінні x і y)
// console.log(res3); // true
// console.log(typeof res3); // "boolean"
// let res4 = Number("x + y");// Допишіть код (використовувати змінні x і y)
// console.log(res4); // NaN
// console.log(typeof res4); // "number"


// //Завдання 2
// let x = prompt("Введіть число");
// let ifEven = (x % 2) == 0;
// console.log(ifEven);
// let ifMultipleOfSeven = (x % 7) == 0;
// console.log(ifMultipleOfSeven);

// //Завдання 3
// let age = prompt("Чи вам є 18 років?")
// let check = (age >= 18) ? "Ви досягли повнолітнього віку" : "Ви ще занадто молоді";
// console.log(check);

// //Завдання 4
// let a = Number(prompt("Введіть першу сторону трикнутника"));
// let b = Number(prompt("Введіть другу сторону трикнутника"));
// let c = Number(prompt("Введіть третю сторону трикнутника"));

// let check = (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) ? "true" : alert("Incorrect data");

// let p = (a + b + c) / 2;
// let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

// console.log(S.toFixed(3));

// let rightTriangle = (Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2) || Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) || Math.pow(c, 2) + Math.pow(b, 2) == Math.pow(a, 2)) ? alert("Трикутник прямокутний") : alert("Трикутний не прямокутний");

// //Завдання 5
// var today = new Date()

// var now = today.toLocaleTimeString('ua-UA');
// let check = (now <= "5:00:00" && now >= "23:00:00") ? alert("Доброї ночі") : (now <= "11:00:00" && now >= "5:00:00") ? alert("Доброго ранку") : (now <= "17:00:00" && now >= "11:00:00") ? alert("Доброго дня") :(now <= "17:00:00" && now >= "23:00:00") ? alert("Доброго вечора") : "end";