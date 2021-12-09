function defaultToString(item){
  if(item === null){
    return "NULL";
  }else if(item === undefined){
    return "UNDEFINED"
  }else if(typeof item ==='string' || item instanceof String){
    return item
  }
  return item.toString()
}

class ValuePair{
  constructor(key,value){
    this.key = key
    this.value = value
  }
  toString(){
    return `[#${this.key}:${this.value}]`
  }
}

// console.log(defaultToString({a:123})) // 如果是对象要实现自己的toString方法

class HashTable {
  constructor(toStrFn = defaultToString){
    this.toStrFn = toStrFn
    this.table = {}
  }

  // 散列函数: 获取字符串的key对应键的hash值
  loseloseHashCode(key){
    if(typeof key === 'number'){
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for(let i=0; i<tableKey.length; i++){
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
    // return hash
  }

  hashCode(key){ // 返回hash值
    return this.loseloseHashCode(key)
  }

  put(key,value){
    if(key !== null && value !== null){
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key,value)
      return true
    }
    return false
  }

  get(key){
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  remove(key){
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if(valuePair != null){
      delete this.table[hash]
      return true
    }
    return false
  }

  getTable(){
    return this.table
  }

  isEmpty(){
    return this.size() === 0
  }
  size(){
    return Object.keys(this.table).length
  }
  clear(){
    this.table = {}
  }

  toString(){
    if(this.isEmpty()){
      return ""
    }
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for(let i=1; i<keys.length; i++){
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`
    }

    return objString
  }
}


const table = new HashTable()
// console.log(table.loseloseHashCode('a'))
table.put("zohnny","2917508907@qq.com")
// console.log(table)
// console.log(table.table['12'].value)
// console.log(table.get('zohnny'))
console.log(table.put('ii',"111@gmail.com"))

console.log(table.toString())