/* 8.11 coins

Coins: Given an innnite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and
pennies (1 cent), write code to calculate the number of ways of representing n cents.
Hints: #300, #324, #343, #380, #394 */

function coins (n, memo = {}) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }

    if (memo[n]) {
        return memo[n];
    }

    memo[n] = coins(n - 1) + coins(n - 2) + coins(n - 3);
    return memo[n];
}

console.log(coins(4));