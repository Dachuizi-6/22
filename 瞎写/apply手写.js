Function.prototype.zwApply = function(thisArg,args){

  var fn = this

  thisArg = thisArg!==null||thisArg!==undefined ? Object(thisArg) : Window

  thisArg.fn = fn

  args = args || []
  var res = thisArg.fn(...args)

  delete thisArg.fn

  return res

}

function foo(n1,n2){
  console.log(this)
  return n1 + n2
}
console.log(foo.zwApply("",[20,30]))
console.log(foo.zwApply(0,[20,30]))