const arr = [1,2,3,4,5]

console.log(arr)

for(let i = 0; i<arr.length; i++ ){
  if(i === arr.length - 1) { 
    console.log(11)
    arr.pop() // 把最后一个删除
    break 
  }else {
    console.log(22)
    arr[i] = arr[i+1]
  }
}

console.log(arr)
