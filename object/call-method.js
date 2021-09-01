const sumaiya = {
  id: 01,
  money: 5000,
  treat: function (expense) {
    this.money = this.money - expense;
    console.log(this);
    return this.money;
  },
};
const arif = {
  id: 02,
  money: 10000,
};
// sumaiya.treat.call(arif, 500);
// sumaiya.treat.call(arif, 500);
/////////////////////   APPLY
sumaiya.treat.apply(arif, [2000]);
sumaiya.treat.apply(arif, [200]);
