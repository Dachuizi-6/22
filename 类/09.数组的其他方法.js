// 一: from方法复制新数组
const arr = [1,2,3,4,5,6]

const newArray = Array.from(arr, x => x%2 === 0) // 第二个参数为过滤函数

console.log(newArray)

// of方法创建新数组
const newArr = Array.of(...arr)
const newArr1 = Array.of(arr)
console.log(newArr,"of方法创建的数组") // [1,2,3,4,5,6]
console.log(newArr1) // [Array(6)]

arr.fill(8,1,3) // 8是要填充的元素
console.log(arr) // [1,8,8,4,5,6] // 含头不含尾

// console.log(arr.copyWithin(0,3)) // 0是索引, 范围含头不含尾
// console.log(arr) // 改变了原数组,又生成了新数组
const a = arr.copyWithin(0,3)
console.log(a,999)
console.log(arr)
