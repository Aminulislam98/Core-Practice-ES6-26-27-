<!--
 ======================== Module 27 Practice Guide ================


🔹 27-0: Primitive vs Non-Primitive √

🧠 Topic (সংক্ষেপে)

Primitive সরাসরি value store করে।
Non-primitive (object, array) reference store করে।

Object copy করলে অনেক সময় original change হয়ে যায়।


📝 Exercise

১টা number variable বানাও।
১টা object বানাও।

দুটো copy করে নতুন variable এ রাখো।
তারপর copy modify করো।

👉 কীভাবে করবে?
•	প্রথমে original console.log করো
•	তারপর copied variable change করো
•	আবার original log করো



🎯 কেন practice?

Copy behaviour না বুঝলে বড় project এ data bug হবে।



🔹 27-1: null vs undefined √

🧠 Topic

undefined হয় value না দিলে।
null আমরা ইচ্ছা করে দেই।



📝 Exercise

একটা variable declare করো কিন্তু value দিও না।
আরেকটা null সেট করো।

তারপর compare করো।

👉 কীভাবে করবে?
•	console.log(typeof variable)
•	console.log(a == b)
•	console.log(a === b)



🎯 কেন practice?

Interview এ খুব common প্রশ্ন।


🔹 27-2: Truthy & Falsy

🧠 Topic

Falsy মাত্র কয়েকটা value।
বাকি সব truthy।


📝 Exercise

0, “”, [], {}, null — এগুলো if condition এ বসাও।

👉 কীভাবে করবে?

if(value){
console.log(“True”)
}else{
console.log(“False”)
}



🎯 কেন practice?

Condition ভুল বুঝলে logic ভেঙে যাবে।


🔹 27-3: == vs ===

🧠 Topic

== type convert করে।
=== type convert করে না।



📝 Exercise

এইগুলো test করো:
	•	5 == “5”
	•	5 === “5”
	•	0 == false
	•	null == undefined

👉 কীভাবে করবে?

প্রতিটা console.log দিয়ে print করো।



🎯 কেন practice?

Loose comparison dangerous হতে পারে।



🔹 27-4: Scope & Hoisting

🧠 Topic

Scope ঠিক করে variable কোথায় access হবে।
Hoisting declaration উপরে তোলে।


📝 Exercise

একটা global variable বানাও।
একটা function এর ভিতরে একই নামে variable বানাও।

আরেকটা test করো:
var declare করার আগে log করো।
let declare করার আগে log করো।

👉 কীভাবে করবে?

console.log বিভিন্ন জায়গায় বসিয়ে output দেখো।



🎯 কেন practice?

Scope leak bug এর বড় কারণ।



🔹 27-5: Closure

🧠 Topic

Inner function outer variable মনে রাখে — এটাই closure।



📝 Exercise

একটা function বানাও যেটা একটা counter return করবে।
বারবার call করলে number বাড়বে।

👉 কীভাবে করবে?
•	Outer function এর ভিতরে variable রাখো
•	Inner function দিয়ে return করো
•	Call করে log করো



🎯 কেন practice?

Private data তৈরি করতে closure লাগে।



🔹 27-6: Callback Function

🧠 Topic

Function কে argument হিসেবে পাঠানো যায়।



📝 Exercise

একটা function বানাও যেটা callback নিবে।
Condition true হলে callback call করো।

👉 কীভাবে করবে?

Callback এর ভিতরে console.log রাখো।
Main function call করো।



🎯 কেন practice?

Event handling এ callback দরকার।



🔹 27-7: Pass by Value vs Reference

🧠 Topic

Primitive copy হয়।
Object reference যায়।



📝 Exercise

একটা number function এ পাঠাও।
একটা object function এ পাঠাও।

ভিতরে modify করো।

👉 কীভাবে করবে?

Before & after console.log করো।


🎯 কেন practice?

Object mutate হয়ে গেলে data error হয়।



🔹 27-8: map & forEach

🧠 Topic

forEach শুধু iterate করে।
map নতুন array return করে।



📝 Exercise

একটা number array নাও।
	•	forEach দিয়ে print করো
	•	map দিয়ে সব number double করে নতুন array বানাও

👉 কীভাবে করবে?

map result console.log করো।



🎯 কেন practice?

Functional programming base তৈরি হয়।



🔹 27-9: filter, find, reduce

🧠 Topic

filter → সব matching item
find → প্রথম matching
reduce → সব মিলিয়ে এক value



📝 Exercise

একটা students array বানাও (name, marks)।
	•	filter দিয়ে পাশ করা বের করো
	•	find দিয়ে প্রথম পাশ করা বের করো
	•	reduce দিয়ে total marks বের করো

👉 কীভাবে করবে?

প্রতিটা result console.log করো।



🎯 কেন practice?

Data processing এর core skill।



🔥 27-10: Summary Practice Challenge

একটা products array বানাও:
•	name
•	price
•	stock

তারপর:
•	filter
•	map
•	reduce
•	callback
•	comparison

সব একসাথে ব্যবহার করো।


🎯 কেন practice?

এই module core JavaScript এর backbone।
React শেখার আগে এটা strong না হলে সমস্যা হবে। -->
