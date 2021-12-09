function debounce(fn, interval, immediate = false,resCallback){
  let timer = null
  let isVoke = false

  function _(...args){
    return new Promise(res => {
      if(timer) clearTimeout(timer)
  
      if(immediate && !isVoke){
        const result = fn.apply(this, args)
        if(resCallback) resCallback(result)
        res(result)
        isVoke = true
      }else{
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          if(resCallback) resCallback(result)
          res(result)
          isVoke = false
          timer = null
        },interval)
      }
    })
  }
  _.cancel = function(){
    if(timer) clearTimeout(timer)
    timer = null
    isVoke = false
  }
  return _
}