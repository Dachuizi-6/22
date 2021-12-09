function* foo() {
    console.log(123)

    // yield 123 // 异常是这里抛出的

    try {
        yield 123 // 异常是这里抛出的
    } catch (error) {
        console.log("代码异常", error)
        yield "aaa"
    }


    // 第二个掉throw，你这都不执行了
    console.log(234)
    yield 234
}

const generator = foo()

// console.log(generator.next())
// console.log(generator.throw(111))
// console.log(generator.next())



// 如果抛出的异常有捕获，则下面的js代码还是会继续执行的，调用throw相当于调用一次next，下一次的yield的值会作为throw的返回值

// 如果在catch里面yield，则值会作为此次throw调用的返回值，下面的yield就不会调用了

// 应用场景，某次next的返回值不满意，直接终止代码执行（做了throw相当于没有终止）
let res = generator.next()
console.log(res)
if (res.value !== 200) {
    console.log(generator.throw("err message"))
}
// 一次throw相当于一次next，没有捕获，此次的yield不会执行
// 一次return也是相当于一次next，此次的yield不会执行