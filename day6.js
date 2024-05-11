// Write a function to determine whether a given string is a palindrome or not. A palindrome is a word or phrase, number. or other sequences of characters that reads the same forward and backward, ignoring spaces, punctuation and capitalization 

// Constraints 

// The input string may contain letters, digits, spaces, punctuation, and special characters.
// The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered as same
// Ignore spaces, punctuation, special characters when determinng if a string is palindrome or not
// The function should return a true if the input string is a palindrome and false otherwise


// Function 

const isPalindrome = (str) => {
   
    str = str.toLowerCase().replace(/\W/g,""); // To remove the spaces, special characters from the string
    let revStr = str.split("").reverse().join("");
    
    return str === revStr ? true : false;
    
}



console.log(isPalindrome("A man , a plan, a canal, Panama")) // Output : True
console.log(isPalindrome("racecar")); // True
console.log(isPalindrome("hello")); // False
console.log(isPalindrome("101")); // True
console.log(isPalindrome("0112")); // False
