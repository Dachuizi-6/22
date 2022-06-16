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

function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    // 找比主元2大的元素,第一个array[left]: 3就满足,否则左移left指针
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      console.log("i=>", i);
      i++;
    }
    // 找比主元小的元素,第一个array[right]: 1就满足,否则右移right指针
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      console.log("j=>", j);
      j--;
    }
    if (i <= j) {
      // swap(array, i, j);
      [array[j], array[i]] = [array[i], array[j]];
      i++;
      j--;
    }
  }
  return i;
}
function quick(array, left, right, compareFn) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, compareFn);

    console.log(left, index, "中心轴");
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }

    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
}
function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}

const arr = [3, 2, 1]; // [1,2,3]
console.log(quickSort(arr));

// max
// const temp = 66;

// let arr1 = [33, 88, 3, 1, 66, 55, 4, 2, 99];

// let i = 0;
// let j = arr1.length - 1;

// while (arr1[i] < temp) {
//   // 小的话就继续循环,遇到大的就停止循环,并且下标最后指向大的位置
//   console.log(arr1[i]);
//   i++;
// }
// while (arr1[j] > temp) {
//   // 大的话就继续循环,遇到小的就停止循环,并且下标最后指向小的位置
//   console.log(arr1[j]);
//   j--;
// }

// console.log("i=>", i);
// console.log("j=>", j);

// console.log(arr1);
// while (i <= j) {
//   while (arr1[i] < temp) {
//     console.log(arr1[i]);
//     i++;
//   }
//   while (arr1[j] > temp) {
//     console.log(arr1[j]);
//     j--;
//   }
//   if (i <= j) {
//     [arr1[j], arr1[i]] = [arr1[i], arr1[j]];
//     i++;
//     j--;
//   }
// }
// console.log(arr1);
