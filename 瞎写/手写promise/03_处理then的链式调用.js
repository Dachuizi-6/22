const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

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

        queueMicrotask(()=>{
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
    return new ZwPromise((res,rej) => {
      
      if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled ){
        try {
          const value = onFulfilled(this.value)
          res(value)
        } catch (err) {
          rej(err)
        }
      }
      if(this.status === PROMISE_STATUS_REJECTED && onRejected){
        try {
          const reason = onRejected(this.reason)
          res(reason)
        } catch (err) {
          rej(err)
        }
      }
  
      if(this.status === PROMISE_STATUS_PENDING){
        this.onFulfilledFns.push(() => {
          try {
            const value = onFulfilled(this.value)
            res(value)
          } catch (err) {
            rej(err)  
          }
        })

        this.onRejectedFns.push(() => {
          try {
            const reason = onRejected(this.reason)
            res(reason)
          } catch (err) {
            rej(err)
          }
        })
      }
    })
  }
}

const promise = new ZwPromise((res,rej) => {
  res("成功")
  // rej("失败")
  // throw new Error("exec里面报错")
})


promise.then(res => {
  console.log("res1:",res)
  return "zohnny"
  // throw Error("报错拉，走err2")
}, err => {
  console.log("err1:",err)
  return "这里fail，但是走下面的res2"
  // throw new Error("报错拉，走err2")
}).then(res => {
  console.log("res2:",res)
},err => {
  console.log("err2:",err)
})



