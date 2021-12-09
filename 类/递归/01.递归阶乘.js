function factorial(n){
  console.trace()
  if(n===1){
    return 1 // 1的时候,后面的代码直接不执行了
  }
  return n * factorial(n-1)
}

// console.log(factorial(3))


let i = 0;
function recursiveFn() {
 i++;
 recursiveFn();
}

// try {
//  recursiveFn();
// } catch (ex) {
//  console.log('i = ' + i + ' error: ' + ex);
// } 
