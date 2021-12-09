function isObject(value){
  const valType = typeof value
  return (value !== null) && (valType === 'object' || valType === 'function')
}

function deepClone(originVal,map = new WeakMap()){
  if(!isObject(originVal)){
    return originVal
  }
  if(map.has(originVal)){
    return map.get(originVal)
  }

  const newObject = {}
  map.set(originVal,newObject)
  for(const key in originVal){
    newObject[key] = deepClone(originVal[key],map)
  }

  return newObject
}

const obj = {
  name:'zohnny',
  friend:{
    name:'kobe'
  },
}
obj.obj = obj

const newObj = deepClone(obj)
obj.friend.name="aaa"
console.log(obj)
console.log(newObj)

console.log(obj.obj.obj.obj)