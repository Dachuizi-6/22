function foo() {
    console.log(this) // 指向全局对象，浏览器：window。node：global

    return {
        a: function () {
            console.log(this) // 指向foo函数调用返回的对象
        }
    }
}

let a = foo()
a.a()