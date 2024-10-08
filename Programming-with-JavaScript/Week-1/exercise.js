// Exericse  Declaring Varaibles
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog, petCat)
console.log(`My pet dog's name is: ${petDog}`)
console.log(`My pet cat''s name is: ${petCat}`)

var catSound = "purr";
var dogSound = "woof";
console.log(`says: ${catSound}`)
console.log(`says: ${dogSound}`)

catSound = "meow"
console.log(`${petCat} now says ${catSound}`)

// Exercise: Advanced use of operators
// Task 1: Using the logical && operator
var score = 8
console.log("Mid-level skills:", score > 0 && score < 10) 

// Task 2: Using the logical || operator
var timeRemaining = 0;
var energy = 10;
console.log("Game over: ", timeRemaining == 0 || energy == 0)

// Task 3: Using the modulus operator, %, to test if a given number is odd
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// Task 4: Add numbers using the + operator
console.log(5 + 10);

// Task 5: Concatenate numbers and strings using the + operator
var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d)

// Task 6: Use the += operator to accumulate values in a variable
var counter = 0;
counter += 5;
counter += 3;
console.log(counter)


// Task: Are You Old Enough? 
var age = 65;

if (age >= 65) {
    console.log('You get your income from your pension');
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log('You get an allowance');
} else {
    console.log('The value of the age variable is not numerical');
}

// Code the days of the week program as a switch statement

var day = "Sunday"

switch(day) {
    case 'Monday':
        console.log('Read a book');
        break;
    case 'Tuesday':
        console.log('Watch a movie');
        break;
    case 'Wednesday':
        console.log('Read a book');
        break;
    case 'Thursday':
        console.log('Play basketball');
        break;
    case 'Friday':
        console.log('Socialize');
        break;
    case 'Saturday':
        console.log('Chill');
        break;
    case 'Sunday':
        console.log('Have barbecue');
        break;
    default:
        console.log('There is no such day');
 }


//  Repetitive tasks with loops

// Task 1
for (var i = 1; i <= 5; ++i) {
    console.log(i)
}
console.log('Counting completed!')


// Task 2
for (var i = 5; i >= 1; --i) {
    console.log(i)
}
console.log('Countdown finished!')


// Task 3
var i = 1
while(i <= 5) {
    console.log(i)
    i += 1
}


// Task 4
var i = 5
while (i >= 1) {
    console.log(i)
    i -= 1
}
console.log('Countdown finished!')


// Task 5
var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};

// Exercise 1
for (var i = 1; i <= 10; ++i) {
    if (i === 1) {
        console.log("Gold medal");
    } else if (i === 2) {
        console.log("Silver medal");
    } else if (i === 3) {
        console.log("Bronze medal");
    } else {
        console.log(i);
    }
}

// Exercise 2
for (var i = 1; i <= 10; ++i) {
    switch(i){
        case 1:
            console.log("Gold medal")
            break;
        case 2:
            console.log("Silver medal")
            break;
        case 3:
            console.log("Bronze medal")
            break;
        default:
            console.log(i)
            break;
    }
}
