// 🔹 26-1: var, let, const
// 📝 Exercise 1: Block Scope পরীক্ষা
{
  //   var practice = "Module";
  //   let practice1 = "Module1";
  //   const practice2 = "Module2";
  //   let and const is blocked scoped once we declared inside {} we will not get access! if we declared in global scope then we get access even we get access form {} because global scope goes  inner scope!
}
// console.log(practice);
// console.log(practice1);
// console.log(practice2);

// =============================================================
// 📝 Exercise 2: const object behavior
// const person = {
//   name: "Aminul islam",
// };
// person.name = "mar";
// person.age = 24;
// console.log(person);

// person = {
//   profession: "Student",
// };
// when we declared variable with const then it will not be reassigned: because this is constant binding which does not changed

// ============================================================
// 📝 Exercise 3: Default value test
// function practiced(num, num1 = 10) {
//   console.log(num + num1);
// }
// practiced(5);  Output: 15
// practiced(5, 2);  Output: 7

// when we give default param , if we call with no param, js automatic give default value:

// ============================================================
// 📝 Exercise 4: Guest system
// function great(name = "Guest") {
//   console.log(`Hello ${name}`);
// }
// great(); // Output: Hello guest;

// ============================================================
// 🔹 26-3: Template String
// 📝 Exercise 5: Dynamic profile

// let person = {
//   name: "aminul",
//   age: 22,
//   city: "Sunamganj",
// };
// console.log(`
//     This is ${person.name},
//     I'm ${person.age} years old,
//     my home town is located in ${person.city}
//     `);

// ==========================================================
// 🔹 26-4: Arrow Function

// 📝 Exercise 7: Simple arrow

// let addition = (num, num1) => {
//   console.log(num + num1);
// };
// addition(23, 8);

// ==========================================================
// 📝 Exercise 8: Even/Odd checker
// let checkEven = (num) => {
//   if (num % 2 === 0) {
//     return console.log(`${num} is a even Number`);
//   }
//   return console.log(`${num} is odd number`);
// };
// checkEven(5);
// checkEven(6);
// ==========================================================
// 📝 Exercise 9: Map practice
// let number = [2, 4, 5, 6, 7, 8];
// let doubled = number.map((num) => {
//   return num * 2;
// });
// console.log(number);
// console.log(doubled);

// ==========================================================
// 🔹 26-5: Spread Operator
// 📝 Exercise 10: Array merge
// let array = [2, 3, 4, 5, 6];
// let array1 = [2, 3, 4, 5, 6];
// let secondArray = [...array, ...array1];
// console.log("Ex10 merged: " + secondArray);

// ==========================================================
// 📝 Exercise 11: Copy array
// let arr = [2, 3, 4, 6, 6];
// let copyArr = [...arr, 9, 8, 7, 6];
// console.log(arr);
// console.log(copyArr);

// ==========================================================
// 📝 Exercise 12: Copy object
// let obj = { name: "aminur", age: 23 };
// let copyObj = { ...obj };
// let extendedObj = { ...copyObj, profession: "Developer" };
// console.log("main object", obj);
// console.log("copy object", copyObj);
// console.log("extended object", extendedObj);

// ==========================================================
// 📝 Exercise 13: Maximum number
// let num = [2, 4, 6, 8, 9, 23];
// let maxNum = Math.max(...num);
// console.log(maxNum);

// ==========================================================
// 🔹 26-6: Destructuring
// 📝 Exercise 14: Array destructuring
// let fruits = ["apple", "banana", "mango", "pineapple"];
// let [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log("this is first index: ", firstFruit);
// console.log("this is second index: ", secondFruit);
// console.log("this is third index: ", thirdFruit);

// ==========================================================
// 📝 Exercise 15: Rest operator
// let arr = [3, 4, 6, 7];
// let [firstValue, ...rest] = arr;
// console.log(firstValue);
// console.log(rest);

// ==========================================================
// 📝 Exercise 16: Object destructuring
// let destructuring = { name: "aminul islam", age: 23, pro: "developer" };
// let { name: fullName } = destructuring;
// console.log("Name is : ", fullName);

// ==========================================================
// 📝 Exercise 17: Rename destructuring
// let alias = { name: "aminur", age: 23, pro: "developer" };
// let { name: fullName } = alias;
// console.log(fullName);
