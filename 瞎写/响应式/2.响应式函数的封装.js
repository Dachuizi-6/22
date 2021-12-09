const reactiveFns = []

function watchFn(fn){
  reactiveFns.push(fn)
}

const obj = {
  name: 'zohnny',
  age: 20
}

watchFn(function(){
  console.log("我是需要执行的代码")
  console.log(obj.name)
})

obj.name = "kobe"
reactiveFns.forEach(fn => {
  fn()
})