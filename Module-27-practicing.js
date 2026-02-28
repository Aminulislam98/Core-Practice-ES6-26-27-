// 🔹 27-0: Primitive vs Non-Primitive
// let num = 7;
// let num1 = num;
// console.log(num, num1);
// let obj = { name: "aminur" };
// let obj1 = obj;
// console.log(obj, obj1);

// ==================================================
// 🔹 27-1: null vs undefined
// let name;
// let age = 23;
// console.log(name == age);
// console.log(name === age);

// ==================================================
// 🔹 27-2: Truthy & Falsy
// function checkTruthyFalsy(value, label) {
//   if (value) {
//     console.log(`27-2 ${label}: true ✅`);
//   } else {
//     console.log(`27-2 ${label}: False: ❌`);
//   }
// }
// checkTruthyFalsy(0, "0");
// checkTruthyFalsy(2, "2");
// checkTruthyFalsy("", "[]");
// checkTruthyFalsy({}, "{}");
// checkTruthyFalsy(null, "null");

// ==================================================
// 🔹 27-3: == vs ===
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(0 == false);
// console.log(null == undefined);

// ==================================================
// 🔹 27-4: Scope & Hoisting
// console.log(global);
// let global = "aminur";
// {
//   let name = "aminur";
// }
// console.log(age);
// var age = 23;
