function objectsEqual(ob1, ob2) {
  let obj1Array = Object.entries(ob1);
  let obj2Array = Object.entries(ob2);
  obj1Array[0] === obj2Array[0]; //?

  return obj1Array.every((item) => item[0] && item[1] obj2Array.includes(item));
}

console.log(objectsEqual({ a: "foo" }, { a: "foo" })); //?
// true
// console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" })); //?
// // false
// console.log(objectsEqual({}, {})); //?
// // true
// console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); //?
// false

/*
PROBLEM
- Chech if all the values of one object are inlcuded in another object

# INPUT:
- two objects
# OUTPUT:
- Boolean
# RULES:
- empty objects work
- simple key value pairs

EXAMPLES
See above

ALGORITHM
# High level
- Take each value in turn and check if its in the other object,
if every value is included return true (do the reverse too?)

# Technical Implementation
- Convert object1 to an array of nested arrays
- Iterate over object1, check if `every` nested array is included in ob2.array
  - Object2 to array, is idx `included`?
- End iterate

CHECK
- Strings: case sensitive, special characters, whitespace, missing
- Numbers: decimals, integers, negatives, zero, missing, floating points
- Objects: mutate, empty (object/value), value type, large values, falsey values
*/
