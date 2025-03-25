function fibonacci(n) {
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

const n = 10; // Jumlah angka Fibonacci yang ingin dicetak
console.log(fibonacci(n));