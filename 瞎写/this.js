var obj1 = {
  name: "obj1",
  foo: function () {
    return () => {
      console.log(this.name); // obj1·
      // 此时这里面的this是obj1，这里的上层作用域是foo的作用域
      // 箭头函数不绑定this，上层作用域this是obj1
    };
  },
};
const obj2 = { name: "obj2" };

obj1.foo()();
obj1.foo.call(obj2)(); // 打印：obj2
obj1.foo().call(obj2); // 打印：obj1 