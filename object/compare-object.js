const obj1 = { a: 1, b: 4 };
const obj2 = { a: 1, b: 2 };
// if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
//   console.log("both are equal");
// } else {
//   console.log("are not equal");
// }
// console.log(Object.keys(obj1).length);
// console.log(Object.keys(obj2).length);
function compareObject(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    return true;
  } else {
    return false;
  }
}
const result = compareObject(obj1, obj2);
// console.log(result);
/////////////////////////
//  SEAL ,,,  freeze
const bottle = {
  name: "water bottle",
  color: "pink",
  price: 100,
};
console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.color;
bottle.name = "somo";
console.log(bottle);
