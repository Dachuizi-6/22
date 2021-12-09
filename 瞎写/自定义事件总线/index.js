class zyEventBus {
  constructor(){
    this.eventbus = {}
  }
  on(eventName, eventCallback, thisArg){
    let handels = this.eventbus[eventName]

    if(!handels){
      handels = []
      this.eventbus[eventName] = handels
    }

    handels.push({
      eventCallback,
      thisArg
    })
  }

  emit(eventName, ...args){
    const handels = this.eventbus[eventName]
    if(!handels) return
    handels.forEach(handel => {
      handel.eventCallback.apply(handel.thisArg, args)
    })
  }

  off(eventName, cb){
    const handels = this.eventbus[eventName]
    if(!handels) return

    const newHandels = [...handels]

    for(const handel of newHandels){ // 变相操作，看着在操作你，找到后，再操作原来的
      if(handel.eventCallback === cb){
        const idx = handels.indexOf(handel)
        handels.splice(idx, 1)
      }
    }
  }
}

const eventBus = new zyEventBus()

eventBus.on('abc', function(payload){
  console.log(this, payload)
}, {name: 'zohnny'})

const callback = function(payload, b){
  console.log(this, payload, b)
}
eventBus.on('abc', callback, {name: 'zohnny'})

eventBus.emit('abc', 123, 456)


eventBus.off('abc',callback)
eventBus.emit('abc', 123, 456)
