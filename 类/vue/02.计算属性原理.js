const Dep = {
  target:null
}

function defineVueProperty(obj,key,val){
  const deps = []
  Object.defineProperty(obj,key,{
    get: function(){
      if(Dep.target && deps.indexOf(Dep.target) === -1){
        deps.push(Dep.target)
      }
      // console.log(deps[0])
      return val
    },
    set: function(newVal){
      val = newVal
      for(let i=0;i<deps.length;i++){
        deps[i]()
      }
    }
  })
}

function definedVueComputed(obj,key,computedFn){

  // 依赖函数
  const onDependencyUpdated = function(){
    const value = computedFn()
    console.log("依赖值:",value)
  }

  Object.defineProperty(obj,key,{
    // 这里的key是计算属性,依赖money
    get:function(){
      Dep.target = onDependencyUpdated
      // 获取计算属性的值,就是money的初始值
      const value = computedFn()
      Dep.target = null
      return value
    }
  })
}

const bank = {}
// 首先得把计算属性添加进来,收集对money的依赖
definedVueComputed(bank,'RMB',function(){
  return `${bank.money}`
})
defineVueProperty(bank,"money",1)

// console.log(bank.money)
console.log(bank.RMB) // 内部会自动访问money,导致money的getter被触发
bank.money = 5
console.log(bank.money)

// 计算属性就是我money发生变化,RMB也会自动更新,RMB依赖money