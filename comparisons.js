// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// line 60 will print the result of is 4 less than 9 which would evaluate to true

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// line 64 will instantiate the variable books and assigns the value to 3
// line 65 will print the result of if 4  is less than books, which books would evaluate to 3, in turn is 4 less than 3 would evaluate false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// line 70 will instantiate the variable friends and assigns the value to 6
// line 71 will instantiate the variable siblings and assigns the value to 2
// line 72 will print the result of friends greater than siblings, friends would evaluate to 6. siblings would evaluate to 2, in turn is 6 more than 2 would evaluate to true

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// line 78 will instantiate the variable attendees and assigns the value to 9
// line 79 will instantiate the variable meals and assigns the value to 8
// line 80 will print the result of attendees is not equal to meals, attendees would evaluate to 9. meals would evaluate to 8, in turn is 9 not equal to 8 would evaluate to true

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("line 106", lovesToPlay && lovesTreats);


// Determine if the dog loves to play and loves the dog park
console.log("line 110", lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log("line 113", lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log("line 116", lovesToPlay && isPuppy);


// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:isPuppy is not defined because we did not instantiate the variable of "isPuppy".