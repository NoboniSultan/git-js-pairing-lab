// //Code your solutions in this file
// 1. Write a function `fiveToOneHundred` that console logs all numbers from 5 to 100.
function fiveToOneHundred() {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}

console.log(fiveToOneHundred(100));



// 2. Write a function `multiplesOfThree` that console logs all positive numbers to 100 that is a multiple of 3.
// > Multiples  of 3 are: `3, 6, 9, 12, 15, ...`


// 3. Write a function `multiplesOfThreeOrFive` that console logs all positive numbers to 100 if that number is either a mulitple of 3 or a mutliple of 5.
// > `3, 5, 6, 9, 10, 12, 15, ...`

// 4. Write a function `untilNum` that takes in an integer parameter and console logs all numbers from 1 to that number.
// ```
// untilNum(5)    //prints out numbers 1 through 5
// untilNum(9)    //prints out numbers 1 through 9
// untilNum(42)   //prints out numbers 1 through 42
// ```

// 5. Write a function `multiply` that takes in two number parameters and **returns** their product.
// ```
// multiply(2, 4)     //returns 8
// multiply(10, -5)   //returns -50
// multiply(3, 7.5)   //returns 22.5
// ```

// 6. Write a function `add` that takes in two number parameters and **returns** their sum. But if the two values are the same, return **triple their sum**!
// ```
// add(2, 4)     //returns 6
// add(10, -5)   //returns 5
// add(3, 7.5)   //returns 10.5
// add(5, 5)     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
// add(6, 6)     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that
// ```

// 7. Write a function `isNegative` that takes in a number parameter and **returns** `true` is the number is a negative value and `false` is the number is a positive value. 
// ```
// isNegative(3)         //returns false
// isNegative(-2)        //returns true
// isNegative(Math.PI)   //returns false
// ```

// 8. Write a function `triangleArea` that takes in the height and base of a triangle and **returns** the [area of the triangle](https://www.mathsisfun.com/algebra/trig-area-triangle-without-right-angle.html). 
// ```
// triangleArea(5, 7)    //returns 17.5
// triangleArea(6, 8)    //returns 24
// ```