function fibonacciIterative(n){
  if(n < 1){
    return 0
  }
  if(n<2){
    return 1
  }

  let fibo2 = 0
  let fibo1 = 1
  let res = n

  for(let i=2;i<=n;i++){
    res = fibo1 + fibo2
    fibo2 = fibo1
    fibo1 = res
  }

  console.log(fibo2,fibo1)
  return res
}

console.log(fibonacciIterative(2))

function fibonacci(n){
  if(n<1){
    return 0
  }
  if(n<=2){
    return 1
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(19),999)


function fibonacciMemoization(n) {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null){
      return memo[n]
    };
    console.log(memo) // [0,1]
    return memo[n] = fibonacci(n - 1,memo) + fibonacci(n - 2,memo);
  };
  return fibonacci(n);
}

console.log(fibonacciMemoization(19),11)