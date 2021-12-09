// 双端队列数据结构: 队列和栈结合的一种数据结构

class Dque {
  constructor(){
    this.items = {}
    this.count = 0
    this.lowerCount = 0
  }

  // 前面增加
  addFront(ele){
    if(this.isEmpty()){
      this.addback(ele)
    }else if(this.lowerCount > 0){
      this.lowerCount--
      this.items[this.lowerCount] = ele
    }else{
      for(let i=this.count; i>0; i--){
        this.items[i] = this.items[i-1]
      }
      this.count++
      this.items[0] = ele
    }
  }
  // 后面增加
  addback(ele){
    this.items[this.count] = ele
    this.count++
  }

  // 前面删除
  removeFront(){
    if(this.isEmpty()){
      return undefined
    }
    const result = this.items[this.lowerCount]
    delete this.items[this.lowerCount]
    this.lowerCount++
    return result
  }

  // 后面删除
  removeBack(){
    if(this.isEmpty()){
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  // 从前面看
  peekFrone(){
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.lowerCount]
  }
  peekBack(){
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.count-1]
  }

  isEmpty(){
    return this.size() === 0
  }
  size(){
    return this.count - this.lowerCount
  }
  clear(){
    this.items = {}
    this.count = 0
    this.lowerCount = 0
  }
  toString(){
    if(this.isEmpty()){
      return ""
    }
    let objString = this.items[this.lowerCount]
    for(let i=this.lowerCount+1; i<this.count; i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

const dque = new Dque()
console.log(dque.isEmpty())
// 前后加
dque.addFront("jack")
dque.addFront("lucy")
dque.addback("zohnny")

// 前后看
console.log(dque.peekFrone())
console.log(dque.peekBack())

// 前后删
// console.log(dque.removeFront())
// console.log(dque.removeBack())

// 字符串化
console.log(dque.toString())

console.log(dque)
