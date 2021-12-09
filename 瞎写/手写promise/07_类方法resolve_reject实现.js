const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

function execFunctionWithCatchError(exec,value,resolve,reject){
  try {
    const result = exec(value)
    resolve(result) // 决定下一次的then状态
  } catch (err) {
    reject(err)
  }
}

class ZwPromise {
  constructor(exec){
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = (value) => {
      if(this.status === PROMISE_STATUS_PENDING){

        queueMicrotask(()=>{

          if(this.status !== PROMISE_STATUS_PENDING) return

          this.status = PROMISE_STATUS_FULFILLED // 放里面调用then的时候，不会直接调用then的参数函数（异步的then状态早已经改变了，所以可以直接调用）
          this.value = value
          this.onFulfilledFns.forEach(fn => {
            fn()
          })
        })
      }
    }

    const reject = ( reason ) => {
      if(this.status === PROMISE_STATUS_PENDING){

        queueMicrotask(() => {
          if(this.status !== PROMISE_STATUS_PENDING) return 
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn()
          })
        })
      }
    }

    try {
      exec(resolve,reject)
    } catch (err) {
      reject(err)      
    }
  }

  then(onFulfilled,onRejected){

    onRejected = onRejected || (err => { throw err })
    onFulfilled = onFulfilled || (value => value)

    return new ZwPromise((res,rej) => {
      
      if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled ){
        execFunctionWithCatchError(onFulfilled,this.value,res,rej) // 获取then的返回值给下一次的then
      }
      if(this.status === PROMISE_STATUS_REJECTED && onRejected){
        execFunctionWithCatchError(onRejected,this.reason,res,rej)
      }
  
      if(this.status === PROMISE_STATUS_PENDING){
        // 回调 我在有值的时候才push进数组
        if(onFulfilled) this.onFulfilledFns.push(() => {
          execFunctionWithCatchError(onFulfilled,this.value,res,rej)
        })

        if(onRejected) this.onRejectedFns.push(() => {
          execFunctionWithCatchError(onRejected,this.reason,res,rej)
        })
      }
    })
  }

  // ES6特有方法
  catch(onRejected){
    return this.then(undefined,onRejected)
  }
  finally(onFinallyed){
    this.then((res) => {
      onFinallyed(res)
    },(err) => {
      onFinallyed(err)
    })
  }

  // 类方法
  static resolve(value){
    return new ZwPromise((res) => {
      res(value)
    })
  }

  static reject(reason){
    return new ZwPromise((res,rej) => {
      rej(reason)
    })
  }
}


ZwPromise.resolve("普通值变promise对象").then(res => {
  console.log("res",res)
})

ZwPromise.reject("普通值决定调用失败的回调").catch(err => {
  console.log("err",err)
})


