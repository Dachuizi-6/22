class Depend {
  constructor(){
    this.reactiveFns = [] 
  }

  addDepend(fn){
    this.reactiveFns.push(fn)
  }

  notify(){
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

let depend = new Depend()

const obj = {
  name: 'zohnny',
  age: 20
}

function watchFn(fn){
  depend.addDepend(fn)
}


watchFn(function(){
  console.log("我是响应式函数")
  console.log(obj.name)
})

obj.name = "kobe"
depend.notify()