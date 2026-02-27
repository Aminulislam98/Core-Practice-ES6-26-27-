// 🔹 26-1: var, let, const
// 📝 Exercise 1: Block Scope পরীক্ষা
{
  var practice = "Module";
  let practice1 = "Module1";
  const practice2 = "Module2";
  //   let and const is blocked scoped once we declared inside {} we will not get access! if we declared in global scope then we get access even we get access form {} because global scope goes  inner scope!
}
console.log(practice);
// console.log(practice1);
// console.log(practice2);

// ======================================================================
// 📝 Exercise 2: const object behaviour
const person = {
  name: "Aminul islam",
};
person.name = "marjiya";
person.age = 24;
console.log(person);

// person = {
//   profession: "Student",
// };
// when we declared variable with const then it will not be reassigned: because this is constant binding which does not changed
