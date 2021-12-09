const feibo = []

feibo[1] = 1
feibo[2] = 1

for(let i = 3; i < 20; i++){
  feibo[i] = feibo[i-1] + feibo[i-2]
}

console.log(feibo)

console.log(feibo[0])

console.log(feibo.length)