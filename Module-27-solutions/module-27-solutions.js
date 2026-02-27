/* ======================================================
   Module 27 — Solutions 
   ====================================================== */

/* ---------------------------
   27-0: Primitive vs Non-Primitive
----------------------------*/

// 1) number (primitive)
let score = 10;
let scoreCopy = score;

console.log("27-0 Primitive BEFORE:", score, scoreCopy);

scoreCopy = 99; // modify copy
console.log("27-0 Primitive AFTER:", score, scoreCopy); // original stays same ✅

// 2) object (non-primitive / reference)
let user = { name: "Amin", age: 22 };
let userCopy = user; // reference copy

console.log("27-0 Object BEFORE:", user, userCopy);

userCopy.name = "Aminur"; // modify copy
console.log("27-0 Object AFTER:", user, userCopy); // original changes too ✅ (same reference)

// Bonus: proper object copy (to avoid reference bug)
let userSafeCopy = { ...user };
userSafeCopy.age = 99;

console.log("27-0 Safe Copy:", user, userSafeCopy);

/* ---------------------------
   27-1: null vs undefined
----------------------------*/

let a; // undefined
let b = null; // null

console.log("27-1 a:", a); // undefined
console.log("27-1 b:", b); // null
console.log("27-1 typeof a:", typeof a); // "undefined"
console.log("27-1 typeof b:", typeof b); // "object" (JS legacy behavior)

console.log("27-1 (a == b):", a == b); // true
console.log("27-1 (a === b):", a === b); // false

/* ---------------------------
   27-2: Truthy & Falsy
----------------------------*/

function checkTruthyFalsy(value, label) {
  if (value) {
    console.log(`27-2 ${label}: True ✅`);
  } else {
    console.log(`27-2 ${label}: False ❌`);
  }
}

checkTruthyFalsy(0, "0");
checkTruthyFalsy("", '""');
checkTruthyFalsy([], "[]");
checkTruthyFalsy({}, "{}");
checkTruthyFalsy(null, "null");
// you can add more:
checkTruthyFalsy("0", '"0"');
checkTruthyFalsy("false", '"false"');

/* ---------------------------
   27-3: == vs === (implicit conversion)
----------------------------*/

console.log("27-3 5 == '5':", 5 == "5"); // true
console.log("27-3 5 === '5':", 5 === "5"); // false
console.log("27-3 0 == false:", 0 == false); // true
console.log("27-3 null == undefined:", null == undefined); // true

// Bonus examples
console.log("27-3 '' == 0:", "" == 0); // true
console.log("27-3 '' === 0:", "" === 0); // false

/* ---------------------------
   27-4: Scope & Hoisting
----------------------------*/

// Scope: global vs function (shadowing)
let city = "London (Global)";

function showCity() {
  let city = "Dhaka (Inside Function)"; // shadows global
  console.log("27-4 Inside:", city);
}

console.log("27-4 Outside:", city);
showCity();
console.log("27-4 Outside again:", city);

// Hoisting: var vs let
console.log("27-4 Hoisting var test:");
console.log(x); // undefined (hoisted declaration)
var x = 10;
console.log("x after assign:", x);

console.log("27-4 Hoisting let test (safe run):");
try {
  console.log(y); // ReferenceError (TDZ)
} catch (err) {
  console.log("let before declare error:", err.message);
}
let y = 20;
console.log("y after declare:", y);

/* ---------------------------
   27-5: Closure (counter)
----------------------------*/

function createCounter() {
  let count = 0; // private variable (outer scope)
  return function () {
    count = count + 1;
    return count;
  };
}

const counter1 = createCounter();
console.log("27-5 counter1:", counter1()); // 1
console.log("27-5 counter1:", counter1()); // 2
console.log("27-5 counter1:", counter1()); // 3

const counter2 = createCounter();
console.log("27-5 counter2:", counter2()); // 1 (separate closure)

/* ---------------------------
   27-6: Callback Function
----------------------------*/

function runIfTrue(condition, callbackFn) {
  if (condition) {
    callbackFn();
  } else {
    console.log("27-6 Condition was false, callback not executed.");
  }
}

function sayHello() {
  console.log("27-6 Hello from callback ✅");
}

runIfTrue(true, sayHello);
runIfTrue(false, sayHello);

// Pass different functions
runIfTrue(true, function () {
  console.log("27-6 Another callback executed ✅");
});

/* ---------------------------
   27-7: Pass by Value vs Reference
----------------------------*/

// Primitive (pass by value)
function changeNumber(n) {
  n = n + 100;
  console.log("27-7 inside changeNumber:", n);
}

let num = 50;
console.log("27-7 num BEFORE:", num);
changeNumber(num);
console.log("27-7 num AFTER:", num); // unchanged ✅

// Object (pass by reference behavior)
function changeObject(obj) {
  obj.name = "Changed Name";
  console.log("27-7 inside changeObject:", obj);
}

let person = { name: "Amin", age: 22 };
console.log("27-7 person BEFORE:", person);
changeObject(person);
console.log("27-7 person AFTER:", person); // changed ✅

/* ---------------------------
   27-8: map & forEach
----------------------------*/

const nums = [1, 2, 3, 4];

// forEach: iterate only
console.log("27-8 forEach prints:");
nums.forEach(function (n) {
  console.log("forEach item:", n);
});

// map: returns new array
const doubledNums = nums.map(function (n) {
  return n * 2;
});

console.log("27-8 original nums:", nums);
console.log("27-8 doubled (map):", doubledNums);

/* ---------------------------
   27-9: filter, find, reduce
----------------------------*/

const students = [
  { name: "Amin", marks: 80 },
  { name: "Rahim", marks: 45 },
  { name: "Karim", marks: 65 },
  { name: "Sumi", marks: 55 },
];

// filter: all passing (>= 50)
const passedStudents = students.filter(function (s) {
  return s.marks >= 50;
});
console.log("27-9 passedStudents (filter):", passedStudents);

// find: first passing
const firstPassed = students.find(function (s) {
  return s.marks >= 50;
});
console.log("27-9 firstPassed (find):", firstPassed);

// reduce: total marks
const totalMarks = students.reduce(function (sum, s) {
  return sum + s.marks;
}, 0);
console.log("27-9 totalMarks (reduce):", totalMarks);

/* ---------------------------
   27-10: Summary Practice Challenge
   products: name, price, stock
   Use filter, map, reduce, callback, comparison
----------------------------*/

const products = [
  { name: "Mouse", price: 15, stock: 10 },
  { name: "Keyboard", price: 35, stock: 0 },
  { name: "Monitor", price: 180, stock: 3 },
  { name: "USB Cable", price: 5, stock: 25 },
];

// comparison + filter (in stock only)
const inStock = products.filter(function (p) {
  return p.stock > 0;
});
console.log("27-10 inStock:", inStock);

// map (add a new field: totalValue = price * stock)
const withValue = inStock.map(function (p) {
  return {
    ...p,
    totalValue: p.price * p.stock,
  };
});
console.log("27-10 withValue:", withValue);

// reduce (sum of inventory value)
const inventoryValue = withValue.reduce(function (sum, p) {
  return sum + p.totalValue;
}, 0);
console.log("27-10 inventoryValue:", inventoryValue);

// callback: report function
function reportInventory(total, cb) {
  console.log("27-10 Reporting inventory...");
  cb(total);
}

reportInventory(inventoryValue, function (total) {
  console.log("27-10 Total Inventory Value:", total);
});
