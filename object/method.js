const student = {
  id: 1,
  name: "sumaiya",
  subject: ["math", "physics", "english"],
  money: 5000,
  takeExm: function () {
    console.log(this.name, "good girl");
  },
  treat: function (expense, tips) {
    this.money = this.money - expense - tips;
    return this.money;
  },
};
student.takeExm();
const remain = student.treat(500, 50);
const remain2 = student.treat(700, 50);
console.log(remain2);
/////////////////////////////////////
const bottle = {
  color: "yellow",
  hole: "water",
  isClean: true,
  price: 50,
};
//getting all property
const property = Object.keys(bottle);
console.log("property", property);
//getting all values
const values = Object.values(bottle);
console.log("Values", values);

//getting all values & property both
const pairs = Object.entries(bottle);
console.log("Pair", pairs);
//
Object.freeze(bottle);
// Object.seal(bottle);
bottle.price = 150;
delete bottle.price;
console.log(bottle);
