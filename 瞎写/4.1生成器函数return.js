function* foo() {
    console.log(123)
    yield 123


    // 第二个掉return，你这都不执行了,return传进来的参数，会当做本次yield的返回值
    console.log(234)
    yield 234
}

const generator = foo()

console.log(generator.next())
console.log(generator.next())
console.log(generator.return(111))
// console.log(generator.next()) // { value: undefined, done: true }
