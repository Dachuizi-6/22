Function.prototype.zwBind = function(thisArg,...args){
  var fn = this
  thisArg = thisArg!==null || thisArg!==undefined ? Object(thisArg) : Window

  var proxy = function(...argArray){
    thisArg.fn = fn
    var params = [...args,...argArray]
    const res = thisArg.fn(...params)
    delete thisArg.fn
    return res
  }

  return proxy
}

function foo(n1,n2,n2,n3){
  console.log(this)
  return n1 + n2 + n2 + n3
}

var bar = foo.zwBind(0,2,3)
console.log(bar(4,5))