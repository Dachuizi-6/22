let nums = [1,2,3,4,5,6,7,8]

function query(item,idx,array){
  if(item % 6 === 0){
    return item%6 === 0
  }
}

// 函数还可以这么写
function queryOtherVersion(item){
  return item % 6 === 0
}

const resItem = nums.find(query)
const resIdx = nums.findIndex(query)

const item = nums.find(queryOtherVersion)
const idx = nums.findIndex(queryOtherVersion)

console.log(resItem) // 6
console.log(resIdx) // 5

console.log(item) // 6
console.log(idx) // 5


console.log(nums.includes(7,6)) // true // 含头, 不看尾巴
console.log(nums.includes(4,3,3)) // true
console.log(nums.includes(5,2,3)) // true