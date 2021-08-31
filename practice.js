let myName = "Sumaiya";
const husbandName = "Arif";
const product = [{ name: "pen", price: 10 }];
const para = `
My name is ${myName}, and my husband name is ${husbandName}
`;
// console.log(para);
///////////////////////////
///////////////////////////
// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।
const number = (num) => num / 5;
const result = number(15);
console.log(result);
////////////////////////////////
////////////////////////////////
// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
const numbers = (num1, num2) => {
  const sum1 = num1 + 2;
  const sum2 = num2 + 2;
  const multiply = sum1 * sum2;
  return multiply;
};
const result1 = numbers(10, 20);
console.log(result1);
/////////////////////////////////
/////////////////////////////////
// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।
const numbers3 = (num1, nunm2, num3) => num1 * nunm2 * num3;
const result3 = numbers3(2, 3, 5);
console.log(result3);
/////////////////////////////////
/////////////////////////////////
// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।
// ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?
/////////////////////////////////
/////////////////////////////////
// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
const numberArray = [1, 2, 3, 4, 5, 6];
const output = numberArray.map((num) => num * 5);
console.log(output);
/////////////////////////////////
/////////////////////////////////
// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো
const numberArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odd = numberArrays.filter((num) => num % 2 != 0);
console.log(odd);
const even = numberArrays.filter((num) => num % 2 == 0);
console.log(even);
/////////////////////////////////
/////////////////////////////////
// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।
const products = [
  { name: "pen", price: 100, color: "green" },
  { name: "laptop", price: 10000, color: "blue" },
  { name: "book", price: 5000, color: "black" },
  { name: "glass", price: 100, color: "green" },
];
const bigPrice = products.find((p) => p.price == 5000);
console.log(bigPrice);
/////////////////////////////////
/////////////////////////////////
// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
// map===>> protita element nea kaj kore and oi element gola akta array te show kore
// forEach===>> sodo element gola show korbe bt kono array te show korbe na
// filter===>> condotion nea kaj kore and oi condition true hole sbgola element show kore.........condition false hoile khali [] dekhei
//
// find===>> first jei element ta condition true korbe sodo oi element tai dekhabe ...screen.availHeightcondition false hoile undifined dekhai
/////////////////////////////////
/////////////////////////////////
// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
const fish = {
  name: "hilsha",
  id: 10,
  price: 1000,
  address: "uttara",
};
const { price, address, name, id } = fish;
console.log(price, name);
/////////////////////////////////
/////////////////////////////////
//৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
const numArray = [10, 20, 30, 40, 50];
const [one, two, three] = numArray;
console.log(three);
/////////////////////////////////
/////////////////////////////////
//১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।
function threePere(n1, n2, n3 = 7) {
  return n1 + n2 + n3;
}
const res = threePere(3, 5);
console.log(res);
/////////////////////////////////
/////////////////////////////////
//  ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
const courseFull = {
  name: "developer",
  price: 1000,
  course: {
    name: "web",
    price: 400,
    time: [11, 12, 10],
  },
};
/////////////////////////////////
/////////////////////////////////
// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।
console.log(courseFull?.course?.name);
