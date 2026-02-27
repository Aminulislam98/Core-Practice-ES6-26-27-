/* ===========================
   MODULE 26 — SOLUTIONS
   =========================== */

/* ---------------------------
   26-1: var, let, const
----------------------------*/

// Exercise 1: Block Scope পরীক্ষা
{
  var v = "I am var";
  let l = "I am let";
  const c = "I am const";
}

console.log("Ex1 var:", v); // কাজ করবে ✅
// console.log("Ex1 let:", l);   // ReferenceError (Uncomment to see) ❌
// console.log("Ex1 const:", c); // ReferenceError (Uncomment to see) ❌

// Exercise 2: const object behaviour
const user = {
  name: "Amin",
  age: 22,
};

user.name = "Aminur"; // property change ✅
console.log("Ex2 after property change:", user);

// user = { name: "New", age: 0 }; // TypeError (Uncomment to see) ❌
// console.log(user);

/* ---------------------------
   26-2: Default Parameter
----------------------------*/

// Exercise 3: Default value test
function add(a, b = 10) {
  return a + b;
}

console.log("Ex3 add(5, 7):", add(5, 7)); // 12
console.log("Ex3 add(5):", add(5)); // 15 (b defaults to 10)

// Exercise 4: Guest system
function greet(name = "Guest") {
  return `Hello ${name}`;
}

console.log("Ex4 greet('Amin'):", greet("Amin"));
console.log("Ex4 greet():", greet());

/* ---------------------------
   26-3: Template String
----------------------------*/

// Exercise 5: Dynamic profile
const profile = {
  name: "Aminur",
  age: 22,
  city: "London",
};

const profileMsg = `Name: ${profile.name}
Age: ${profile.age}
City: ${profile.city}`;

console.log("Ex5 profile message:\n" + profileMsg);

// Exercise 6: Multiline message
const myBio = `Hi, I am Aminur.
I am learning JavaScript.
I practice daily.`;

console.log("Ex6 multiline bio:\n" + myBio);

/* ---------------------------
   26-4: Arrow Function
----------------------------*/

// Exercise 7: Simple arrow
const sum = (x, y) => x + y;
console.log("Ex7 sum(10, 20):", sum(10, 20));

// Exercise 8: Even/Odd checker
const evenOdd = (n) => (n % 2 === 0 ? "Even" : "Odd");
console.log("Ex8 evenOdd(7):", evenOdd(7));
console.log("Ex8 evenOdd(10):", evenOdd(10));

// Exercise 9: Map practice
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
console.log("Ex9 original:", numbers);
console.log("Ex9 doubled:", doubled);

/* ---------------------------
   26-5: Spread Operator
----------------------------*/

// Exercise 10: Array merge
const arr1 = [10, 20];
const arr2 = [30, 40];
const merged = [...arr1, ...arr2];
console.log("Ex10 merged:", merged);

// Exercise 11: Copy array + add value
const originalArr = [1, 2, 3];
const copiedArr = [...originalArr];
const addedArr = [...originalArr, 4];
console.log("Ex11 original:", originalArr);
console.log("Ex11 copied:", copiedArr);
console.log("Ex11 added:", addedArr);

// Exercise 12: Copy object + add property
const baseObj = { title: "Learner", level: "Beginner" };
const copiedObj = { ...baseObj };
const extendedObj = { ...baseObj, progress: "65%" };
console.log("Ex12 baseObj:", baseObj);
console.log("Ex12 copiedObj:", copiedObj);
console.log("Ex12 extendedObj:", extendedObj);

// Exercise 13: Maximum number (spread + Math)
const scores = [55, 88, 72, 91, 60];
const maxScore = Math.max(...scores);
console.log("Ex13 maxScore:", maxScore);

/* ---------------------------
   26-6: Destructuring
----------------------------*/

// Exercise 14: Array destructuring (first two values)
const fruits = ["Apple", "Banana", "Mango"];
const [firstFruit, secondFruit] = fruits;
console.log("Ex14 first:", firstFruit);
console.log("Ex14 second:", secondFruit);

// Exercise 15: Rest operator
const [firstNum, ...restNums] = [100, 200, 300, 400];
console.log("Ex15 firstNum:", firstNum);
console.log("Ex15 restNums:", restNums);

// Exercise 16: Object destructuring (name, age)
const student = { name: "Rahim", age: 20, city: "Dhaka" };
const { name, age } = student;
console.log("Ex16 name:", name);
console.log("Ex16 age:", age);

// Exercise 17: Rename destructuring
const { name: studentName } = student;
console.log("Ex17 renamed name:", studentName);

/* ---------------------------
   26-7: Object Methods
----------------------------*/

const obj = { a: 1, b: 2, c: 3 };

// Exercise 18: Keys
console.log("Ex18 keys:", Object.keys(obj));

// Exercise 19: Values
console.log("Ex19 values:", Object.values(obj));

// Exercise 20: Entries
console.log("Ex20 entries:", Object.entries(obj));

// Exercise 21: Delete property
const person = { name: "Amin", age: 22, city: "London" };
delete person.city;
console.log("Ex21 after delete:", person);

// Exercise 22: Freeze test
const frozenObj = { x: 10 };
Object.freeze(frozenObj);

// frozenObj.x = 99;   // change blocked (silent fail in non-strict) ❌
// frozenObj.y = 20;   // add blocked ❌
console.log("Ex22 frozenObj:", frozenObj);

// Exercise 23: Seal test
const sealedObj = { p: 1, q: 2 };
Object.seal(sealedObj);

sealedObj.p = 999; // modify allowed ✅
// sealedObj.r = 3; // add blocked ❌
// delete sealedObj.q; // delete blocked ❌
console.log("Ex23 sealedObj:", sealedObj);

/* ---------------------------
   26-8: Nested + Optional Chaining
----------------------------*/

// Exercise 24: Nested object (2/3 level) + deep access
const deepUser = {
  profile: {
    address: {
      city: "London",
      postCode: "E1",
    },
  },
};

console.log("Ex24 deep city:", deepUser.profile.address.city);

// Exercise 25: Optional chaining (property may not exist)
console.log("Ex25 phone (safe):", deepUser?.profile?.phone?.number); // undefined (no error)

// Exercise 26: Dot vs Bracket
console.log("Ex26 dot:", deepUser.profile.address.city);

const key1 = "profile";
const key2 = "address";
const key3 = "city";
console.log("Ex26 bracket dynamic:", deepUser[key1][key2][key3]);

/* ---------------------------
   26-9: Looping
----------------------------*/

// Exercise 27: for...of (array loop)
const techs = ["HTML", "Tailwind", "JavaScript"];
for (const t of techs) {
  console.log("Ex27 tech:", t);
}

// Exercise 28: for...in (object loop)
const dev = { name: "Amin", role: "Learner", country: "UK" };
for (const k in dev) {
  console.log("Ex28", k, "=>", dev[k]);
}

// Exercise 29: Object.entries loop
for (const [k, val] of Object.entries(dev)) {
  console.log("Ex29", k, "=>", val);
}

/* ---------------------------
   Final Challenge (All Concepts)
----------------------------*/

const products = [
  { name: "Mouse", price: 15, category: "Accessories" },
  { name: "Keyboard", price: 35, category: "Accessories" },
  { name: "Monitor", price: 180, category: "Display" },
];

// arrow function + map (new array)
const discounted = products.map((p) => ({
  ...p, // spread
  price: p.price - 5,
}));

// destructuring + template string + loop
for (const p of discounted) {
  const { name: productName, price, category } = p; // destructuring + rename
  console.log(`Final: ${productName} | £${price} | Category: ${category}`); // template string
}

console.log("Final original products:", products);
console.log("Final discounted products:", discounted);
