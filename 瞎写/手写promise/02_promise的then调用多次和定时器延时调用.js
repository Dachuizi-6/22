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
            fn(value)
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
            fn(reason)
          })
        })
      }
    }

    exec(resolve,reject)
  }

  then(onFulfilled,onRejected){
    if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled ){
      onFulfilled(this.value)
    }
    if(this.status === PROMISE_STATUS_REJECTED && onRejected){
      onRejected(this.reason)
    }

    if(this.status === PROMISE_STATUS_PENDING){
      this.onFulfilledFns.push(onFulfilled)
      this.onRejectedFns.push(onRejected)
    }
  }
}

const promise = new ZwPromise((res,rej) => {
  rej("失败")
  res("成功")
})

promise.then(res => {
  console.log("res1:",res)
}, err => {
  console.log("err1:",err)
})

promise.then(res => {
  console.log("res2",res)
},err => {
  console.log("err2",err)
})

setTimeout(()=>{
  promise.then(res => {
    console.log("res3",res)
  },err => {
    console.log("err3",err)
  })
},3000)