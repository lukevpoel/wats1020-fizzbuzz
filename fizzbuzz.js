// Place your FizzBuzz code here. 
/*var i = 1;
var fizz = (i % 3 !== 0);
var buzz = (i % 5 !== 0);
var fizzbuzz = (i % 15 !== 0);*/
for (i=1; i<= 20; i++) { //setting conditions to check up to number 20
  
  //write fizzbuzz in console if the number is divisible by both 3 AND 5
  if ((i % 3 === 0) && (i % 5 === 0)){ 
    console.log("fizzbuzz")
  }
  
  //This is Shawn's way. A little trial and error with syntax allowed me to write it a different way
  //This checks if number is divisible by 3. Also the commented portion allows me to check if it's divisible by both 3 and 5
  else if (i % 3 === 0) {
    /*if (i % 5 === 0) {
    console.log("fizzbuzz")
    } 
    else*/ 
    console.log("fizz")
  }
  
  //checking to see if number is divisible by 5
  else if (i % 5 === 0) {
    console.log("buzz")
  }
  
  //writes numbers if it's not fizz or buzz
  else {
    console.log(i)
  }
}