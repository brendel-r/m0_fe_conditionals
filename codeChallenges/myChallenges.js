// challenge 1
var age = 33;
age = 14;
// age = 37;
if (age % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}


// challenge 2
var goodDrivingRecord = true;
var age = 24;
//age = 30
 //age = 15
 //goodDrivingRecord = false

// good driving record is true and age > 25 "you get a discount!"
// good driving record is true or age is > 25 "Sorry,you pay full price!"
// age < 25 and bad driving record "Have an adult sign!!

if (age > 25 && goodDrivingRecord === true) {
  console.log("You get a discount!!!");
} else if (goodDrivingRecord === true || age > 25) {
  console.log("Sorry, you pay full price");
} else if ( age < 25 && goodDrivingRecord === false) {
  console.log("Have an adult sign")
}

// challenge 3