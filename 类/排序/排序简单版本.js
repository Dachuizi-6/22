// 冒泡排序:前一项和后一项两两比较,大的往后移动,每经过一轮,大的数就在最后面了
// 比较轮数: length-1
// 每轮比较次数: length-1-i
function bubble(ary) {
  for (let i = 0; i < ary.length - 1; i++) {
    for (let j = 1; j < ary.length - 1 - i; j++) {
      if (ary[j] < ary[j - 1]) {
        [ary[j - 1], ary[j]] = [ary[j], ary[j - 1]];
      }
    }
  }
  return ary;
}

// 插入排序:就像打牌
function insert(ary) {
  const handle = [];
  handle.push(ary[0]);

  for (let i = 1; i < ary.length; i++) {
    let newItem = ary[i];

    for (let j = handle.length - 1; j >= 0; j--) {
      if (newItem > handle[j]) {
        handle.splice(j + 1, 0, newItem);
        break;
      }
      if (j === 0) {
        handle.unshift(newItem);
      }
    }
  }
  return handle;
}

// 快速排序
function quickSort(ary) {
  if (ary.length <= 1) {
    return ary;
  }

  // 找到中间值
  const middleIdx = Math.floor(ary.length / 2);
  const middleVal = ary.splice(middleIdx, 1)[0];

  // 区分左右数组
  const left = [];
  const right = [];
  for (let i = 0; i < ary.length; i++) {
    const item = ary[i];
    middleVal > item ? left.push(item) : right.push(item);
  }

  return quickSort(left).concat(middleVal, quickSort(right));
}

const arr = [8, 1, 2, 6, 4, 19, 54, 36, 69];

console.log(bubble(arr));
console.log(insert(arr));
console.log(quickSort(arr));
