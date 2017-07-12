/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);

/**
* #1
* Variables with a String value
*
* Declare variables named `firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`, `favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`.
* Assign values to these variables with your own data.
*
* Each value should be a String. 
**/
var firstName;
var lastName;
var birthPlace;
var favoriteFood;
var bestMovie;
var favLoveSong;
var cuteAnimal;
var favColor;
var favSneaker;
var coffeeShop;

firstName = "Chanelle";
lastName = "Tolentino";
birthPlace = "Honolulu";
favoriteFood = "Asian";
bestMovie = "Wonder Woman";
favLoveSong = "Valentine";
cuteAnimal = "dog";
favColor = "green";
favSneaker = "adidas";
coffeeShop = "Starbucks";

firstName = "Betty";
//overriding: the more recent value added will always show

console.log(firstName, lastName, birthPlace);
/* check in node.  remember to type (up) on keyboard if you want to call a previously typed statement
writing variable keywords between commas in the ( ) prints all values in a row */

/**
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*
* Each value should be a Number
**/
var favoriteNumber;
var currentYear;
var thatOnePrinceSong;
var tokyoOlympics;
var mariahCareyAge;
var currentTemp;
var studentsInClass;
var numOfJapanPrefectures;
var currentIphoneModel;
var shoeSize;

favoriteNumber = 2;
currentYear = 2017;
thatOnePrinceSong = 1;
tokyoOlympics = 2011;
mariahCareyAge = 60;
currentTemp = 50;
studentsInClass = 5;
numOfJapanPrefectures = 7;
currentIphoneModel = 7;
shoeSize = 8;

/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/
var likesMcDonalds;
var watchedMrRobot;
var ranMarathon;
var wrestledABear;
var lovesDonuts;
var readHarryPotter;
var sleptInClass;
var drinksCoffee;
var shopsAtWholeFoods;
var ownsRedShoes;

likesMcDonalds = true;
watchedMrRobot = false;
ranMarathon = false;
wrestledABear = false;
lovesDonuts = true;
readHarryPotter = true;
sleptInClass = true;
drinksCoffee = false;
shopsAtWholeFoods = true;
ownsRedShoes = false;

/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/
var completedPrepClass;
var traveledToMars;
var scoredTDinNFL;


completedPrepClass = null;
traveledToMars = null;
scoredTDinNFL = null;

//only lower case! null NOT Null

/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
*/

/*null has a value of blank and undefined means it doesn't have a value yet*/

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variavle named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/

var platelunch = ["veggies", "rice", "hamburger", "sauce", "cheese"];
console.log("platelunch", platelunch);
// [ ] square brackets
var duets = [["sunny and cher", "huey lewis and the news"], ["ben and myla", "c&k"]];
console.log("duets", duets);

/*7
* Accessing Values in Arrays
What is the length of this array? Please print the length (a number) to the console 
(.length only works for strings (length of characters in the string))
What is the index position of carrot cake? Please print this item to the console.
What is the index position of lemon bars? Please print this item to the console.
*/
var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];
console.log("First Index", partyList[0]);
//will print the first element in your array

var stuff = [24, "Timmy", ["white", "blue", "yellow"]];
console.log(stuff[2][1]);
//matrix, 2d array = nested array, prints the 2nd element in the third element of the array, chaining

/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.

* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/



/*
* #9 Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named `sum`.
* Subtract the two variables and store it to a new variable named `difference`.
* Mulitply the two variables and store it to a new variable named `product`.
* Divide the two variables and store it to a new variable named `quotient`.
* What is the remainder when you divide num1 by num2? Print your answer to the console.
*/


/*
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality.
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.

--2 (minus 2)

|| <-- "pipes"

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.
*/

var numNum = 5;
var numString = "5";

console.log(numNum);
console.log(numString);

var isStrictlyEqual = "tacocat" === "Tacocat";
var isLooselyEqual = 5 == "5";
var isTrue = 67 == "67";
var isStrict = 355 === "355";

console.log("isStrictlyEqual", isStrictlyEqual, "isLooselyEqual", 
	isLooselyEqual, "isTrue", isTrue, "isStrict", isStrict);

/*
Examples above have same data but not same data type
== equality (checks for data)
=== strict equality (checks for data & data type)
*/

/*
* Use the logical && or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?*/


/*
* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
*/

/*
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.*/


/*
* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"



* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.*/


/*
* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
*/

