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

function game(membersList,num){
  const queue = new Queue()
  const eliminate = []

  // 游戏玩家加入队列
  for(let i=0; i<membersList.length; i++){
    queue.enqueue(membersList[i])
  }

  // 传完给定的轮数,对头的人被淘汰
  // 循环直到只剩下一个人
  while(queue.size() > 1){
    for(let i=0; i<num; i++){
      queue.enqueue(queue.dequeue())
    }
    eliminate.push(queue.dequeue())
  }

  // 返回淘汰人员列表和胜利者
  return {
    eliminate,
    winner: queue.dequeue()
  }
}

const players = ["花木兰","芈月","韩信","娜可露露","兰陵王"]

const result = game(players,5)
console.log(result)

result.eliminate.forEach(item => {
  console.log(`${item}-玩家此轮游戏结束`)
})

console.log(`victory:${result.winner}`)

// export {}

that.setState({
  tableList: data.records
})