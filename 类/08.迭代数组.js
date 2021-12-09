// 一
const arr = [1,2,3,4,5,6]

const iterator = arr[Symbol.iterator]()

// console.log(iterator)

for(let n of iterator){
  // console.log(n)
}

// console.log(iterator) // 到这里迭代器已经被遍历完了

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// 二

const arrEntries = arr.entries() // 得到一个迭代器对象,包含键值对的 @@iterator
// console.log(arrEntries.next().value) // [0.1] // 数组也是对象,下标对应对象的键
// console.log(arrEntries.next())
// console.log(arrEntries.next())
// console.log(arrEntries.next())
// console.log(arrEntries.next())
// console.log(arrEntries.next().value) // [5,6] // 位置5的值是6 === 下标5的值是6
// console.log(arrEntries.next()) // { value: undefined, done: true }

for(let n of arrEntries){
  // console.log(n) // [0,1], [1,2], ... // 键值对,对于集合,字典,散列表非常有用
}

// 三
// keys返回包含数组索引的@@iterator
const keysIterator = arr.keys() // Array Iterator
// console.log(keysIterator,"keys")

for(const n of keysIterator){
  // console.log(n) // 0,1,2,3,4,5 // arr有六个元素1-6
}

// 四
// values方法返回包含数组元素的 @@iterator
const arrValues = arr.values()
console.log(arrValues)
console.log(arrValues.next().value)
let count = 0
for(const n of arrValues){
  count++
  console.log(n)
}
console.log(`进来迭代了${count}次`) // 5