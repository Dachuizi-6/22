function double(count){
  return count * 2
}

function squire(count){
  return count ** 2
}

function mycompose(...fns){
  const length = fns.length
  for(let i = 0; i < length; i++){
    if(typeof fns[i] !== "function"){
      throw new TypeError("参数必须是函数类型哦~")
    }
  }

  return function(...args){
    let idx = 0
    let result = length ? fns[idx].apply(this, args) : undefined
    while(++idx < length){
      result = fns[idx].call(this, result)
    }
    return result
  }
}

const compose = mycompose(double,squire)
console.log(compose(10));