// let obj = {
//     foo: () => {
//         console.log(this) // {}
//         // console.log(global)
//         console.log(this == global) // false
//     }
// }

// console.log(this,222); // {}

// obj.foo()


function foo(){
    console.log(this === global); // true
}
foo()
console.log(111);
console.log(this); // { }