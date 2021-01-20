// measure performance
let start = 0;
let end = 0;

start = performance.now();
sumUp(10);
end = performance.now();
end - start

// Linear time complexity = Execution time grows linearly with n
// 0(n) see below examples
// A bigger number leads to more loop iterations, hence time increases in a linear way
// 10x slower for each incremental digit
// sumUp(100) is 10x slower than sumUp(10)
function sumUp(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result = result + i;
    }
    return result;
}


// Constant time complexity = n (number of input) has no effect on the time the algorithm takes
// O(1) see below examples
// much faster without the loop
function sumUp(n) {
    return (n / 2) * (1 + n);
}

sumUp(3)

// Deriving Big O (Asymptotic Analysis)
// Count the number of expression executions

// For Linear function:
// 1 Define the function                T = a*n + b
// 2 Find the fastest growing term      a*n
// 3 Remove the coefficient             T = n
// Big O notation                       O(n)

// For Constant function:
// 1 Define the function                T = 1
// 2 Find the fastest growing term      T = 1
// 3 Remove the coefficient             T = 1
// Big O notation                       O(1)