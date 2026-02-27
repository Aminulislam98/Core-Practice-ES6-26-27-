<!-- ============ MODULE 26 ===============

🔹 26-1: var, let, const

📝 Exercise 1: Block Scope পরীক্ষা √

একটা {} block তৈরি করো।
ভিতরে var, let, const দিয়ে তিনটা variable declare করো।

তারপর block এর বাইরে console.log() করে দেখো —

👉 কোনটা কাজ করছে?
👉 কোনটা error দিচ্ছে?

🎯 লক্ষ্য: block scope কীভাবে কাজ করে সেটা বোঝা।

📝 Exercise 2: const object behaviour √

const দিয়ে একটা object বানাও।
তারপর:
• object এর একটা property change করো
• তারপর পুরো object নতুন করে assign করার চেষ্টা করো

👉 কি পারছো?
👉 কোথায় error আসছে?

🎯 লক্ষ্য: const variable আর const object এর পার্থক্য বোঝা।

🔹 26-2: Default Parameter

📝 Exercise 3: Default value test

একটা function বানাও যেটা দুইটা parameter নিবে।
দ্বিতীয় parameter না দিলে default value হবে 10।

তারপর:
• একবার দুইটা value দিয়ে call করো
• একবার শুধু একটা value দিয়ে call করো

🎯 লক্ষ্য: parameter না দিলে default কিভাবে কাজ করে সেটা বোঝা।

📝 Exercise 4: Guest system

একটা greet function বানাও।
যদি name না দাও তাহলে output হবে:
Hello Guest

🎯 লক্ষ্য: real life situation এ default parameter ব্যবহার করা।


🔹 26-3: Template String

📝 Exercise 5: Dynamic profile

একটা object বানাও:
• name
• age
• city

Template string ব্যবহার করে ৩ লাইনের message বানাও।

🎯 লক্ষ্য: ${} দিয়ে dynamic value বসানো শিখা।


📝 Exercise 6: Multiline message

Backtick ব্যবহার করে নিজের একটা ছোট profile লিখো —
এক লাইনে না, তিন লাইনে।

🎯 লক্ষ্য: multiline string কেন দরকার বোঝা।



🔹 26-4: Arrow Function

📝 Exercise 7: Simple arrow

একটা arrow function বানাও যা দুইটা সংখ্যা যোগ করবে।

🎯 লক্ষ্য: function keyword ছাড়া arrow syntax ব্যবহার শেখা।

📝 Exercise 8: Even/Odd checker

একটা arrow function বানাও যা একটা সংখ্যা নিয়ে check করবে সেটা even না odd।

🎯 লক্ষ্য: arrow function + condition একসাথে ব্যবহার করা।

📝 Exercise 9: Map practice

একটা number array নাও।
map ব্যবহার করে সব number double করে নতুন array বানাও।

🎯 লক্ষ্য: arrow function inside map বোঝা।

🔹 26-5: Spread Operator

📝 Exercise 10: Array merge

দুইটা array merge করো spread ব্যবহার করে।

🎯 লক্ষ্য: array combine করা সহজভাবে।

📝 Exercise 11: Copy array

একটা array copy করো এবং নতুন একটা value যোগ করো।

🎯 লক্ষ্য: original array যেন change না হয় সেটা নিশ্চিত করা।

📝 Exercise 12: Copy object

একটা object copy করো এবং নতুন property যোগ করো।

🎯 লক্ষ্য: immutable practice বোঝা।

📝 Exercise 13: Maximum number

একটা number array থেকে maximum value বের করো spread ব্যবহার করে।

🎯 লক্ষ্য: spread + Math method ব্যবহার শেখা।

🔹 26-6: Destructuring

📝 Exercise 14: Array destructuring

একটা array থেকে প্রথম দুইটা value আলাদা variable এ রাখো।

🎯 লক্ষ্য: index না লিখেও value বের করা।

📝 Exercise 15: Rest operator

একটা array থেকে প্রথম value আলাদা করো এবং বাকি সব value rest operator দিয়ে রাখো।

🎯 লক্ষ্য: ...rest বোঝা।

📝 Exercise 16: Object destructuring

একটা object থেকে name এবং age আলাদা variable এ রাখো।

🎯 লক্ষ্য: dot না লিখে data বের করা।
📝 Exercise 17: Rename destructuring

Object destructuring করে একটা property অন্য নামে rename করো।

🎯 লক্ষ্য: variable naming control করা।

🔹 26-7: Object Methods

📝 Exercise 18: Keys বের করা

Object থেকে সব key বের করো।

🎯 লক্ষ্য: Object.keys বোঝা।

📝 Exercise 19: Values বের করা

Object থেকে সব value বের করো।

📝 Exercise 20: Entries বের করা

Object থেকে key + value pair বের করো।

📝 Exercise 21: Delete property

একটা property delete করো এবং object print করো।

📝 Exercise 22: Freeze test

Object.freeze ব্যবহার করে object freeze করো।
তারপর নতুন property add করার চেষ্টা করো।

🎯 লক্ষ্য: freeze করলে কি change হয়?

📝 Exercise 23: Seal test

Object.seal ব্যবহার করে object seal করো।
তারপর property modify ও add করার চেষ্টা করো।

🎯 লক্ষ্য: freeze আর seal এর পার্থক্য বোঝা।

🔹 26-8: Nested + Optional Chaining

📝 Exercise 24: Nested object

একটা ২ বা ৩ level nested object বানাও।
Deep value access করো।

🎯 লক্ষ্য: nested access বোঝা।

📝 Exercise 25: Optional chaining

Optional chaining ব্যবহার করে এমন property access করো যা হয়তো নেই।

🎯 লক্ষ্য: error ছাড়া undefined পাওয়া।

📝 Exercise 26: Dot vs Bracket

একই property dot notation ও bracket notation দিয়ে access করো।

🎯 লক্ষ্য: bracket notation কখন দরকার হয় বোঝা।

🔹 26-9: Looping

📝 Exercise 27: for…of

একটা array loop করো।

📝 Exercise 28: for…in

একটা object loop করো এবং key + value print করো।

📝 Exercise 29: entries loop

Object.entries ব্যবহার করে object loop করো।

🔥 Final Challenge

একটা products array বানাও (name, price, category)।

তারপর:
• arrow function ব্যবহার করো
• spread ব্যবহার করো
• destructuring ব্যবহার করো
• template string ব্যবহার করো
• loop ব্যবহার করো

🎯 লক্ষ্য: Module 26 এর সব concept একসাথে ব্যবহার করা। -->
