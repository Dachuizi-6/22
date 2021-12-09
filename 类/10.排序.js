const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const reverseArr = arr.reverse()
console.log(reverseArr) // [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// let z_sort = reverseArr.sort()
// console.log(z_sort) // [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9],把元素默认成字符串进行比较
// 如果是字母等其他字符,会根据字符对应的ASCII值来比较

function compare(a,b){
  console.log(a,b)
  if(a < b){
    return -1
  }else if(a > b){
    return 1
  }else {
    return 0
  }
}

// console.log(reverseArr,99) // [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9]
z_sort = reverseArr.sort(compare)
console.log(z_sort) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let f_sort = z_sort.sort(compare)
console.log(f_sort) // 还是正的排序


// 二
let nameArr = ['Ana','ana','John','john']
console.log(nameArr.sort((a,b) => {
  if(a.toLowerCase - b.toLowerCase){
    return -1
  }else if(a.toLowerCase > b.toLowerCase){
    return 1
  }else { // 可以去掉这个else,直接在最后一行写return 语句
    return 0
  }
}))
// 这个时候的sort函数没有任何作用

// 如果要小写在前
nameArr = ['Ana','ana','John','john']
console.log(nameArr.sort((a,b) => {
  console.log(a,b)
  return a.localeCompare(b) // 小写在前的函数, 引用字符串b在a的前面,返回1,后面返回-1,相等返回0
}),"小写在前")
