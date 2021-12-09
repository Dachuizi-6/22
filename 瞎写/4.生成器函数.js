function* foo() {
    console.log(123)
    yield
    console.log(234)
}

const obj = foo() // 返回特殊的迭代器，也叫生成器
// console.log(obj)

console.log(obj.next())
console.log(obj.next())