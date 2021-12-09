Function.prototype.zwCall = function(thisArg,...args){
  // 获取到需要执行的函数
  var fn = this

  thisArg = thisArg!==null || thisArg!== undefined ? Object(thisArg) : window
  thisArg.fn=fn

  let result = thisArg.fn(...args)

  delete thisArg.fn
  return result
}

function foo(){
  console.log("foo函数执行",this)
}

function sum(num1,num2,num3){
  console.log("sum函数执行",this)
  return num1+num2+num3
}

foo.zwCall("")
console.log(sum.zwCall(0,20,30,40))
