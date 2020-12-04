const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4],3), [1,2,4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4],3), [1,2,3,4]);
const test = [5,6,7,8];
assert.deepStrictEqual(myRemove(test), test);