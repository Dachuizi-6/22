const arr = [2, 7, 8];
let target = 15;

// 2 + 7 = 9
function get(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]; // num = 2

    if (num in obj) {
      return [obj[num], i];
    } else {
      obj[target - num] = i; // {7:0}
      // console.log(obj);
    }
  }
}

const res = get(arr);
console.log(res);
