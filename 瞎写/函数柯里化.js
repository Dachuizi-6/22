function sum(a, b, c){
  return a + b + c
}

// console.log(sum(1, 2, 3));

function myCurried(fn) {
  function _(...args){
    if(args.length === fn.length){
      console.log(args);
      return fn.apply(this, args)
    }else {
      return function(...args2){
        return _.apply(this, [...args, args2])
      }
    }
  }
  return _
}

const curried = myCurried(sum)

console.log(curried(1)(2)(3));