const factors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)

console.log(factors(100));