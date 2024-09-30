function fib(n) {
  // recursion
  if (n <= 1) {
    return n;
  }
  return fib(n-2) + fib(n-1);
}

function fib2(n) {
  // for loop, faster (dp)
  let arr = [0, 1];
  for (let i = 2; i <= n; ++i) {
    arr[i] = arr[i-2] + arr[i-1];
  }
  return arr[n];
}

function fib3(n) {
  // better dp, 9/30 update
  let arr = [0, 1];
  for (let i = 2; i <= n; ++i) {
    arr[i&1] = arr[i&1] + arr[(~i)&1];
  }
  return arr[n&1];
}

const fibonacci = fib2; // 所以我的函式應該要叫做 fib(n) 還是 fibonacci(n)？

console.log("fib(0) = " + fib(0));
console.log(`fib(1) = ${fib(1)}`);
console.log("fib(5) = " + fib(5).toString());
console.log("fib(10) = " + fib(10));
console.log("fibonacci(50) = " + fibonacci(50));
console.log("fib3(75) = " + fib3(75));
