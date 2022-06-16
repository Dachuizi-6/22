const Compare = {
  LESS_THAN: -1,
  BIGGER_THEN: 1,
  EQUALS: 0
}

function defaultCompare(a,b){
  if(a === b){
    return Compare.EQUALS
  }
  return a < b? Compare.LESS_THAN : Compare.BIGGER_THAN 
}

function insertionSort(array, compareFn = defaultCompare){
  const {length} = array
  let temp
  for(let i = 1; i<length; i++){
    temp = arr[i]
    let j = i
    while(j>0 && compareFn(array[j-1], temp) === Compare.BIGGER_THAN){
      array[j] = array[j-1]
      j--
    }
    array[j] = temp
  }
  return array
}

let arr = [5,4]

const res = insertionSort(arr)
console.log(res)