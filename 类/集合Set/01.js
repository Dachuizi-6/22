class Set {
  constructor(){
    this.items = {} // 细节:要用对象
  }

  has(ele){
    return Object.prototype.hasOwnProperty.call(this.items,ele)
  }

  add(ele){
    if(!this.has(ele)){
      this.items[ele] = ele // 添加一个ele,同时作为键和值保存,有利于查找改元素
      return true // 添加成功返回true
    }
    return false // 存在返回false,代表添加不成功
  }

  delete(ele){
    if(this.has(ele)){
      delete this.items[ele]
      return true
    }
    return false
  }

  clear(){
    this.items = {}
  }

  size(){
    // return Object.keys(this.items).length
    
  }
}

const set = new Set()
// set.add("name")
// set.delete("name")
set.add(1)
set.add(2)
console.log(set.items)
// console.log(set.has("name"))

console.log(set.size())