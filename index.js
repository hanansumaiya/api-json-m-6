// // const number1 = function numbers(num1, num2) {
// //   const adding = num1 + num2;
// //   return adding;
// // };
// // const resultt = number1(10, 15);
// // console.log(resultt);
// // //////////
// // const number = (num1, num2) => num1 + num2;
// // const result = number(10, 10);
// // console.log(result);
// // ////////////////
// // const fish = {
// //   id: 10,
// //   name: "Hilsha",
// //   price: 1000,
// //   address: "chandpur",
// // };
// // // const fishPrice = fish.price;
// // // const fishName = fish.name;
// // // const fishId = fish.id;
// // // const fishAddress = fish.address;
// // const { price, id, name, address } = fish;
// // console.log(price, id, address, name);
// ///////////////////////////////////////////////////////////////////

// // const numbres = [3, 5, 7, 9];
// // const output = [];
// // const doubleit = (num) => num * 2;
// // // for (const number of numbres) {
// // //   const result = doubleit(number);
// // //   output.push(result);
// // // }
// // const outputMap = numbres.map((num) => num * 2);
// // console.log(outputMap);
// ////////////////////////////////////////////////////////////////////////
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const output = numberArray.map((num) => num * 2);
// console.log(output);
// /////////////////////////////////////////////////////////////////////
// const friends = ["sumaiya", "alomgir", "momotaj", "arifuzzaman", "sahera"];
// const flengths = friends.map((f) => f.length);
// friends.map((friend) => console.log(friend));
// // friends.forEach((friend) => console.log(friend));
// console.log(flengths);
// ////////////////////////////////////////////////////////////////////
// const products = [
//   { name: "pen", price: 100, color: "green" },
//   { name: "mouse", price: 100, color: "blue" },
//   { name: "book", price: 100, color: "black" },
//   { name: "glass", price: 100, color: "green" },
// ];
// const productColor = products.find((p) => p.color == "green");
// console.log(productColor);
// /////////////////////////////////////////////////////////////////////////////
// const numbers = [10, 5, 8, 11, 45, 85, 1002, 100, 42, 5, 36, 25];
// const bigNumbers = numbers.filter((number) => number > 50);
// const smallNumbers = numbers.filter((number) => number < 50);
// console.log(bigNumbers);
// console.log(smallNumbers);
// //////////////////////////////////////////////////////////////////////

class Support {
  name;
  designation;
  address;
  phone;
  constructor(name, designation, address, phn) {
    this.name = name;
    this.designation = designation;
    this.address = address;
    this.phone = phn;
  }
  startSession() {
    console.log("Start session");
  }
}
const sumaiya = new Support("Sumaiya", "web developer", "uttara", "0123456789");
const arif = new Support(
  "Arifuzzamana",
  "Web developer",
  "uttara",
  "0123456987"
);
console.log(sumaiya);
console.log(arif);
/////////////////////////////////////////////////
//////////////  SPREAD OPERATOR
const numbers = [1, 22, 2, 3, 5, 6, 9, 8, 75, 41, 21, 45, 25, 36, 52];
console.log(...numbers);
///////////////////////////////////////////
const [one, two, three, four] = numbers;
console.log(two, four);
////////////////////////////////////////////
class People {
  id;
  name;
  profession;
  address;
  constructor(id, name, profession, address) {
    this.id = id;
    this.name = name;
    this.profession = profession;
    this.address = address;
  }
}
const people1 = new People(4125, "arif", "web developer", "uttara");
console.log(people1);
