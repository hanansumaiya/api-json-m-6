const sumaiya = {
  id: 01,
  money: 5000,
  treat: function (expense) {
    this.money = this.money - expense;
    console.log(this);
    // return this.money;
  },
};
const arif = {
  id: 02,
  money: 10000,
};
const trtArif = sumaiya.treat.bind(arif);
trtArif(1000);
sumaiya.treat(100);
console.log(arif);
