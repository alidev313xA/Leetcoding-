
# 🧮 204. Count Primes

**Problem Link:**
[https://leetcode.com/problems/count-primes/description/](https://leetcode.com/problems/count-primes/description/)

## 📋 Problem Summary

Given an integer `n`, return the number of **prime numbers that are strictly less than `n`**.

## 🧠 Intuition & Approach

Take out the pen and notebook and try to solve it by yourself — try varieties of different examples.


### 🔸 Brute Force O(n²)

First I thought: what if we loop through `(2 - n)` (n is exclusive), and check for each number if it is a prime or not?

Here is the algorithm and code:

```javascript
var countPrimes = function(n) {
    let count = 0; 

    for (let i = 2; i < n; i++) { 
        if(isPrime(i)) { 
            count += 1; 
        }
    }    

    return count; 
};

function isPrime(n) {
    let factors = 0; 

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors += 1; 
        }
    }

    if (factors === 2) return true; 
    return false; 
}
```

**📈 Time Complexity:**
O(n²) — we are looping through `(2 - n)`, and for each number we check if it is a prime or not by checking how many factors it has.

**🗂️ Space Complexity:**
O(1) — No extra space used.

---

### 🔹 Optimized O(n) — Sieve of Eratosthenes

Before we move to the actual solution, let's ask ourselves a few questions:

* In brute force logic we checked if each number less than `n` is prime or not.
* What if we can **neglect all the multiples** of the current number while checking if it is prime?
* How can we find the multiples for every number `(2 - n)` and mark them as `false` to neglect, since they can't be primes?

To answer the above questions, we use the **Sieve of Eratosthenes algorithm**:

1. Start with the numbers `(0 - n)` and mark them all `true`.
2. Mark numbers `0` and `1` as `false`, because they can't be prime numbers.
3. For every number `i = 2` to `(i * i < n)`:

   * If it's marked as `true` (i.e., still considered prime),

     * Mark all multiples of `i` as `false`.
4. Count the numbers that are still marked `true` — they are the primes less than `n`.
5. Return the count.

```javascript
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
```

**📈 Time Complexity:**
O(n) — Efficient prime checking using Sieve logic.

**🗂️ Space Complexity:**
O(n) — Array used to track prime status of numbers up to `n`.

---

## 🧾 Notes / Struggles

Anything you found tricky or learned while solving it.
