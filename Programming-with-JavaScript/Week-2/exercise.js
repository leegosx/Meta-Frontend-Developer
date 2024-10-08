// Task 1
function letterFinder(word, match) {
    for (var i = 0; i < word.length; ++i) {
        if (word[i] == match) {
            console.log(`Found the match ${match} at ${i}`)
        } else {
            console.log(`---No match found at ${i}`)
        }
    }

}

letterFinder("test", "t")


// Exercise: Creating arrays and objects
var clothes = [];

clothes.push("Jeans");
clothes.push("T-Shirts");
clothes.push("Sneakers");
clothes.push("Caps");
clothes.push("Sweatshirts");

clothes.pop();
console.log(clothes);


var favCar = {};

favCar.color = "Yellow";
favCar.covertible = true;

console.log(favCar);


// Example: Adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

// Tells the type of datatype
console.log(typeof(car));
console.log(typeof(car.turnTheKey));



// Exercise: Error Handling
function addTwoNums(a, b) {
    try {
        if(typeof(a) != "number") {
            throw new ReferenceError("the first argument is not a number.")
        } else if(typeof(b) != "number") {
            throw new ReferenceError("the second argument is not a number.")
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log(`Error! ${err}`)
    }
}

addTwoNums(5, 5)
console.log("It still works");



// Exercise: Defensive programming
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condtion2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condtion2) {
        for(var i = 0; i < word.length; ++i) {
            if(word[i] == match) {
                console.log(`Found the ${match} at ${i}`)
            } else {
                console.log(`--No match found at ${i}`)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}

letterFinder(55, 5)
letterFinder("cat", "c") 