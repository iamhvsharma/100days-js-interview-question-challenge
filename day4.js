// Interview Question 

// Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "Equilateral", "Isosceles", "Scalene"

// The function should adhere to the following rules:
// If all three sides are of equal length, return "equilateral".
// If only two sides are of equal length, return "isosceles".
// If all three sides are of different length, return "scalene".

const checkTriangleType = (a, b, c) => {
    if(a===b && b===c){
        console.log("Equilateral");
    }
    else if(a === b || b === c || a === c){
        console.log("Isosceles");
        
    } else{
        console.log("Scalene");

    }
}

console.log(checkTriangleType(3, 3, 3)); // Output - Equilateral
console.log(checkTriangleType(3, 2, 3)); // Output - Isosceles
console.log(checkTriangleType(3, 1, 2)); // Output - Scalene