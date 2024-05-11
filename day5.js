// Programming Question : Sort an Array

// Write a function to sort an array of numbers in an ascending order

// Example usage: 
// console.log(sortAscending([5, 3, 19, 10, 14]));
// console.log(typeof sortAscending[2]);

// todo requirement 

// The function should take an array of numbers as input
// It should return a new array with the numberss sorted in ascending order.
// The original array should remain unchanged.
// You are not allowed to use the built-in sort() method

const sortAscending = (arr) => {
    return arr.sort((A,b) => {
        b-A;
    })

}

console.log(sortAscending([5, 3, 19, 10, 14]));

// NOTE: Sort method doesn't work well on numbers as in a list of array [ 10, 2, 5, 3] It will give output as [10, 2, 3, 5]. It works well on Strings 
// But for numbers there is another function called as Comparision function which is found in the sort function which helps us to sort in ascending and descending order both
