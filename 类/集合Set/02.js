var arr = []
for(var i=0; i < 10; i++){
  arr[i] = function(){
    console.log(i)
  }
}

console.log(arr[6]())

function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

const obj = {a:123}
const res = defaultToString(obj)
console.log(res)

console.log(defaultToString(123))
console.log(typeof defaultToString(123))

console.log(defaultToString(true))
console.log(typeof defaultToString(true))

console.log(defaultToString(Symbol()))
console.log(typeof defaultToString(Symbol()))