// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array

// function

const findMax = (arr) => {
    // return Math.max(1,4,10,33, 22); // This Math.max returns the max numbers among all numbers 
    // return Math.max(arr); // But this doesn't works on Array directly
    return Math.max(...arr); // So we need to spread array into numbers in order to use Math.max to find the maximum in the array
}


// Example Usage:

console.log(findMax([1, 5, 8, 9, 3, 2]));
console.log(findMax([-1, -5, -8, -9, -3, -2]));
console.log(findMax([9]));