"use strict"


console.log(this,111) // node：{} 浏览器：window

function foo(){
  console.log(this,222)
}

foo()