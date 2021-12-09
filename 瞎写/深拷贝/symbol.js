function isObject(value){
  const valType = typeof value
  return (value !== null) && (valType === 'object' || valType === 'function')
}

// console.log(typeof Symbol('aaa')) // symbol

function deepClone(originVal){
  if(typeof originVal === 'symbol'){
    return Symbol(originVal.description)
  }



  // 判断是不是对象（这个应该放到最下面）
  if(!isObject(originVal)){
    return originVal
  }

  const newObject = {}
  for(const key in originVal){
    newObject[key] = deepClone(originVal[key])
  }
  const symbolKeys = Object.getOwnPropertySymbols(originVal)
  for(const skey of symbolKeys){
    newObject[skey] = deepClone(originVal[skey])
  }

  return newObject
}

const s1 = Symbol('aaa')

const obj = {
  name:'zohnny',
  friend:{
    name:'kobe'
  },
  s1:s1,
  [s1]: 'aaa'
}

const newObj = deepClone(obj)
console.log(obj)
console.log(newObj)
console.log(obj.s1 === newObj.s1) // false
