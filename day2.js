// Programming Question : Hash Tag Generator

// You are required to implement a function generateHash that generates a hash tag from a given input string. The hashtag should be constructed as follows 

// The input string should be converted to a hashtag format where each word is capitalized and concatenated together without space
// If the length of input string is greater than 280 characters or if the input stringis empty or contains only whitespaces the function should return false
// Otherwise, the function should return the generated hashtag prefixed with #

// eg : Input string = > "i am harshvardhan sharma"
// Output : #IAmHarshvardhanSharma


const generateHash = (str) => {
    if(str.length > 280 || str.length === 0){
        return false
    }

    strArr = str.split(" ")
    // console.log(strArr);

    // To convert all the words first letter in capital letter
    // We have many methods like "for of, for each, map, filter"
    // We can use for of and map here

    strArr = strArr.map((curElement) => 
    // curElement.replace(curElement[0], curElement[0].toUpperCase())

    // OR  
    curElement.charAt(0).toUpperCase() + curElement.slice(1)
    );

    // console.log(strArr);
    hashWord = `#${strArr.join("")}`
    
    console.log(hashWord);

    // Done

}



console.log(
    generateHash("my dream car is rolls royce")
)