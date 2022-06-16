const Compare = {
  LESS_THAN: -1,
  BIGGER_THEN: 1,
  EQUALS: 0,
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function merge(left, right, compareFn) {
  console.log("left=>", left);
  console.log("right=>", right);
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === Compare.LESS_THAN
        ? left[i++]
        : right[j++]
    );
  }
  console.log(i, j);
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    console.log(222);
    console.log(array);
    const right = mergeSort(array.slice(middle, length), compareFn);

    array = merge(left, right, compareFn);
  }
  return array;
}

const arr = [8, 7, 6, 5];
const res = mergeSort(arr);

// console.log(arr);
console.log(res);
