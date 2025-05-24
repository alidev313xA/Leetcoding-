var countPrimes = function(n) {
  let count = 0; // count the number of primes less than n 

  let isPrime = new Array(n).fill(true); // [T, T, T, T ..... T (N - 1)] 
  isPrime[0] = isPrime[1] = false; // [F, F, T, T, T, .... T (N-1)], made 0 and 1 false, they cant be the primes 
  
  for (let i = 2; i * i < n; i++) {
      if(isPrime[i]) {
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false; 
        }
      }
  }
  
  return isPrime.filter(tag => tag === true).length; 
};