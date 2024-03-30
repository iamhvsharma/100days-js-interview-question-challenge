// Programming Question : Longest word in a String

// Question - Write a Function findLongestWord that takes a string input and returns the longest word in the string. If there are multiple longest word, return the first one encountered

// Constraints:

// The input string may contain Alphabetic Characters, digits, spaces, punctuations
// The input string is not empty 
// The input string may contain multiple words separated by spaces 

// Note: 
// If the input string is empty or contains only whitespace, the function should return as false
// The function should ignore leading and trailing whitespace when determining the longest word


const findLongestWord = (str) => {
    // Let's check the string is empty or not if yes then return false 
    if(str.trim().length === 0){
        return false
    }
    
    // Changing String to array by word (" ") by letter ("")
    strArr = str.split(" ")
    // console.log(strArr);

    
    // strArr = strArr.sort((a,b) => a.length - b.length)

    // The sort method first sort the array in the alphabetical order and then the callback function arranges the array in ascending order
    // if you do (b-a) then the array will be arranged in the descending order 

    // console.log(strArr);

    // Now as we know that the last element of Array is of longest length so we will return the element on the last index using "at" method

    // return strArr.at(-1); 



    // Using Reduce method {Second method}

    // return strArr.reduce(
    //     (accumulator, currentValue) => (accumulator.length > currentValue.length ? accumulator : currentValue), ""
    //     );


    // Reduce Function MDN
    // The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce(). Read the iterative methods section for more information about how these methods work in general.
        

}


console.log(
    // findLongestWord("One day I'll become Billionaire note it")
    findLongestWord("People come and go from the life it's a never ending process")

    
)