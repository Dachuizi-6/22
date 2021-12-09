let activeReactiveFn = null

class Depend {
  constructor(){
    this.reactiveFns = new Set()
  }

  notify(){
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }

  depend(){
    if(activeReactiveFn){
      this.reactiveFns.add(activeReactiveFn)
    }
  }
}

// 依赖收集函数
function watchFn(fn){
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 获取依赖对象的函数
const targetMap = new WeakMap()
function getDepend(target,key){
  // 根据target获取map
  let map = targetMap.get(target)
  if(!map){
    map = new Map()
    targetMap.set(target,map)
  }

  // 根据key获取depend
  let depend = map.get(key)
  if(!depend){
    depend = new Depend()
    map.set(key,depend)
  }

  return depend
}


// 让某个对象变成响应式
function reactive(obj){
  return new Proxy(obj,{
    get:function(target, key, receiver){
      const depend = getDepend(target, key)
      depend.depend()
      return Reflect.get(target, key, receiver)
    },
    set:function(target, key, newVal, receiver){
      Reflect.set(target, key, newVal, receiver)
      const depend = getDepend(target, key)
      depend.notify()
    }
  })
}


const obj = reactive({
  name:'zohnny',
  age:20
})

// 收集name的依赖
watchFn(function(){
  console.log("这是响应式函数name更新调用的")
  console.log(obj.name)
  console.log(obj.name)
})
// 收集age的依赖
watchFn(function(){
  console.log("age更新调用的函数")
  console.log(obj.age)
})

obj.name = "lucy"
obj.age = 18


const info = reactive({
  address: "广州市"
})

watchFn(function(){
  console.log("info对象的响应式函数")
  console.log(info.address)
})

info.address = "深圳市"