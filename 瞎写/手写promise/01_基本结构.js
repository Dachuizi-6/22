const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"
class ZwPromise {
  constructor(exec){
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if(this.status === PROMISE_STATUS_PENDING){

        this.status = PROMISE_STATUS_FULFILLED
        queueMicrotask(()=>{
          this.value = value
          this.onFulfilled(value)
        })
      }
    }

    const reject = ( reason ) => {
      if(this.status === PROMISE_STATUS_PENDING){
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(()=>{
          this.reason = reason
          this.onRejected(reason)
        })
      }
    }

    exec(resolve,reject)
  }

  then(onFulfilled,onRejected){
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
}

const promise = new ZwPromise((res,rej) => {
  res("成功")
  rej("失败")
})

promise.then(res => {
  console.log("res1:",res)
}, err => {
  console.log("err1:",err)
})
