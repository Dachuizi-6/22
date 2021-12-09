class Queue {
  constructor(){
    this.count = 0 
    this.lowerCount = 0 // 记录队首
    this.items = {}
  }
  enqueue(element){
    this.items[this.count] = element
    this.count++
  }
  dequeue(){
    if(this.isEmpty()){
      return undefined
    }
    const result = this.items[this.lowerCount]
    delete this.items[this.lowerCount]
    this.lowerCount++
    return result
  }
  isEmpty(){
    return this.size() === 0
  }
  size(){
    return this.count - this.lowerCount
  }
  peek(){
    if(this.isEmpty){
      return undefined
    }
    return this.items[this.lowerCount]
  }
  clear(){
    this.items = []
    this.count = 0
    this.lowerCount = 0
  }
  toString(){
    if(this.isEmpty()){
      return ""
    }
    let objString = this.items[this.lowerCount]
    for(let i = this.lowerCount+1; i< this.count; i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
console.log(queue)
console.log(queue.toString())


