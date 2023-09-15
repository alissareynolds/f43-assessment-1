///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0;  // we needed to declare a totalAcres variable to have a place to put the end result of calculaitng the total number of acres - you set the variable to 0 to be able to start your calculations with a fresh slate
let fujiTotal = 0; // the variable fujiTotal is declared to be used in calculating the total amount of acres picked specifically in the fujiAcres array 
let galaTotal = 0; // the variable galaTotal is declared to be used in calculating the total amount of acres picked specifically in the galaAcres array 
let pinkTotal = 0; // the variable pinkTotal is declared to be used in calculating the total amount of acres picked specifically in the pinkAcres array 


// the first statement of the for loop displays the index at which you want to start the loop
// the condition of the for loop shows that the index of i is always going to be less than the length of the array - therefore if one of the arrays is changed, or an index is added, the for loop will always account for the entire length of the array
// the last staement in the for loop displays i++, this will cause the loop to keep moving forward one at a time throughout the arrays
for ( let i = 0; i < fujiAcres.length; i++) {
 fujiTotal = fujiAcres[i] + fujiTotal;  // the loop is going to run through until the length of the array is complete - fujiAcres[i] is going to run through the loop and the index is going to change everytime - the first time the loop runs the code will look like this: fujiTotal = fujiAcres[0] + 0 
 // - because the first statement is let i = 0 , the loop will run starting with the first index at 0 , which in the fujiAcres array is 2 
 // this means that the first time it runs the code displays fujiTotal = 2 + 0 
 // the body of the for loop continues to repeat until the array is over - the index will go up everytime until it adds up all of the acres inside the array
 // this action then repeats itself for the 2 other arrays until we know know how many acres of apples were picked for all of the seperate orchards
} for (let i = 0; i < galaAcres.length; i++) {
    galaTotal = galaTotal + galaAcres[i];
 } for (let i = 0; i < pinkAcres.length; i++) {
        pinkTotal = pinkTotal + pinkAcres[i];
 } totalAcres = galaTotal + fujiTotal + pinkTotal;
// we then find the totalAcres by adding up the totalAcres picked in the 3 seperate arrays, which gives us 63 through console.log(totalAcres)

console.log(fujiTotal);
console.log(galaTotal);
console.log(pinkTotal);

console.log(totalAcres);




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = 0;
// first you need to declare a variale called averageDailyAcres to then be able to assign the answer to it 
 

averageDailyAcres = totalAcres / 21;
// since in the previous problem we already calculated the variable totalAcres, we just need to find the average 
// you calculate the average of something by taking the total and dividing it by the amount of numbers that are in the set 
// since our totalAcres is 63 this code is dividing that by the total amount of days they picked apples, which is 21
// therefore 63 / 21 is 3 - so there is an average of 3 acres of apples that are being picked each day 


console.log(averageDailyAcres);
// this code displayes the averageDailyAcres to the console 




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// let fujiTons =
// let galaTons =
// let pinkTons =






// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// let fujiPounds =
// let galaPounds =
// let pinkPounds =






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
