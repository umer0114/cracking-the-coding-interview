/* 8.1 - Triple Step
Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs. */

function tripleStep(steps) {
    if (steps < 0) {
        return 0;
    }

    if (steps === 0) {
        return 1;
    }

    return tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3);
}

function tripleStepMemoized(steps, memo = {}) {
    if (steps < 0) {
        return 0;
    }

    if (steps === 0) {
        return 1;
    }

    return memo[steps] || (memo[steps] = tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3));    
}

console.log(tripleStep(10));
console.log(tripleStepMemoized(10));