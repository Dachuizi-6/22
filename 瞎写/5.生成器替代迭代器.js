function* createStringGenerator(str) {
    // 第一种写法（yield* 后跟可迭代对象）
    // yield* str

    // 第二种写法
    // for (const item of str) {
    //     yield item
    // }

    // 第三种写法
    let idx = 0
    yield str[idx++]
    yield str[idx++]
    yield str[idx++]
    yield str[idx++]
    yield str[idx++]
    yield str[idx++]
    yield str[idx++]
    yield str[idx++]
    yield str[idx++]
    yield str[idx++]
}

// const generator = createStringGenerator("123456789")

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// 第二个案例：迭代器做法
function createRangeIterator(start, end) {
    let idx = start

    return {
        next: function () {
            if (idx <= end) {
                return {
                    done: false,
                    value: idx++
                }
            } else {
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }
}

// const iterator = createRangeIterator(10, 20)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// 生成器做法

function* createRangeGenerator(start, end) {
    let idx = start

    while (idx <= end) {
        yield idx++
    }
}

const generator = createRangeGenerator(10, 20)
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())