function Foo(car){
  this.bar = function(){ // 第一次调用给m的bar重新赋值
    console.log(this,11)
    this.bar = () => { // 
      console.log(this.car)
    }
    Foo.bar = () => {
      console.log(this.car)
    }
  }
  this.car = car
}

const m = new Foo(3)
m.bar()
console.log(Foo.bar,22)
m.bar()
console.log(m)

Foo(45)
console.log(global.bar)
console.log(global.car === 45)

Foo.bar()
