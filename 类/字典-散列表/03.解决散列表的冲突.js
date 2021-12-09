function defaultToString(key){
  if(key === null){
    return "NULL"
  }else if(key === undefined){
    return "UNDEFINED"
  }else if(typeof key === 'string' || key instanceof String){
    return key
  }

  return key.toString()
}

class ValuePaire {
  constructor(key,value){
    this.key = key
    this.value = value
  }
  toString(){
    return `[#${this.key}: ${this.value}]`
  }
}

class HashTableLinearProbing {
  constructor(toStrFn = defaultToString){
    this.toStrFn = toStrFn
    this.table = {}
  }

  loseloseCode(key){
    if(typeof key === 'number'){
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash =0
    for(let i=0; i<tableKey.length; i++){
      hash += tableKey.charCodeAt(i)
    }

    return hash % 37
  }

  hashCode(key){
    return this.loseloseCode(key)
  }

  put(key,value){
    if(key != null && value != null){
      const position = this.hashCode(key)
      if(this.table[position] == null){
        this.table[position] = new ValuePaire(key,value)
      }else{
        let index = position + 1
        while(this.table[index] != null){
          index++
        }
        this.table[index] = new ValuePaire(key,value)
      }
      return true
    }
    return false
  }

  get(key){
    const position = this.hashCode(key)
    if(this.table[position] != null){
      if(this.table[position].key === key){
        return this.table[position].value
      }

      let idx = position+1;
      while(this.table[idx]!=null && this.table[idx].key !== key){
        idx++
      }

      if(this.table[idx] != null && this.table[idx].key === key){
        return this.table[idx].value
      }
    }
    return undefined
  }

  remove(key){
    const position = this.hashCode(key)
    if(this.table[position] != null){
      if(this.table[position].key === key){
        delete this.table[position]

        this.verifyRemoveSideEffect(key,position)
        return true
      }

      let idx = position + 1
      while(this.table[position] != null && this.table[position].key !== key){
        idx++
      }
      if(this.table[position] != null && this.table[position].key === key){
        delete this.table[position]
        this.verifyRemoveSideEffect(key, idx)
        return true
      }
    }
    return false
  }

  verifyRemoveSideEffect(key,removePosition){
    const hash = this.hashCode(key)
    let idx = removePosition + 1
    while(this.table[idx] != null){
      const posHash = this.hashCode(this.table[idx].key)
      if(posHash <= hash || posHash <= removePosition){
        this.table[removePosition] = this.table[idx]
        delete this.table[idx]
        removePosition = idx
      }
      idx++
    }
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
  getTabel(){
    return this.table
  }

  toString(){
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for(let i=1; i<keys.length;i++){
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`
    }
    return objString
  }
}

const hash = new HashTableLinearProbing()
hash.put("Ygritte","ashjkxs@gmail.com")
hash.put("Jonathan","cgasjh@qq.com")
hash.put('Jamie',"csgjakc@163.com")
hash.put("Jack","jack@qq.com")


console.log(hash.get("Jack"))

hash.remove("Jonathan")

console.log(hash)