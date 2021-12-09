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

const depend = new Depend()
function watchFn(fn){
  depend.addDepend(fn)
}

const obj = {
  name: "zohnny",
  age: 20
}

const objProxy = new Proxy(obj,{
  get(target,key,receiver){
    console.log(target,key,receiver)
    return Reflect.get(target,key,receiver)
  },
  set:function(target,key,newVal,receiver){
    console.log(target,key,newVal,receiver)
    Reflect.set(target,key,newVal,receiver)
    depend.notify()
  }
})

watchFn(function(){
  console.log("我是响应式函数")
  console.log(objProxy.name)
})

objProxy.name = "kobe"