// function merge(array) {
//   const { length } = array;
//   if (array.length > 1) {
//     const mid = Math.floor(length / 2);

//     // 先左半部分执行完,下面的才会执行
//     const left = merge(array.slice(0, mid));

//     const right = merge(array.slice(mid));
//     console.log("left=>", left);
//     console.log("right=>", right);
//     console.log(array);
//   }
//   return array;
// }

// const arr = [1, 2, 3, 4];

// merge(arr);

function merge(arr) {
  const { length } = arr;
  if (length > 1) {
    const mid = Math.floor(length / 2);
    const left = merge(arr.slice(0, mid));
    const right = merge(arr.slice(mid));
    const res = handle(left, right);
    return res;
    // console.log(arr);
  }
  return arr;
}

function handle(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      result.push(right[j++]);
    } else {
      result.push(left[i++]);
    }
  }
  if (i < left.length) {
    return result.concat(left.slice(i));
  } else {
    return result.concat(right.slice(j));
  }
}

const array = [4, 3, 2, 1];
// console.log(arr);
console.log(merge(array));

console.log("----------------------华丽的分割线----------------");

function log(array) {
  array = [4, 5, 6];
  return array;
}

const arr1 = [1, 2, 3];
console.log(arr1);
console.log(log(arr1));
