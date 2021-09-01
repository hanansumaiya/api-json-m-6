//1
const student = { name: "Sumaiya", age: 20, phone: "012345678" };
// console.log(student);
//2
const people = new Object(student);
// console.log(people);
//3
const human = Object.create(student);
console.log(human.name);
//4 ( Class )
class Peoples {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}
const peop = new Peoples("Arif", 8596321, "arif@gmail.com");
console.log(peop);
//5 Function
function manus(name) {
  this.name = name;
}
const man = new manus("sumaiya");
console.log(man);
