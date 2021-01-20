// Write a program that prints the number from 1 to 20.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5 print "FizzBuzz".
// For numbers not divisible by 3, or 5, or both, print the number as is.

// pseudo:
// FOR LOOP
// Break when counter reaches 20
// Increment counter by 1
    // IF number MOD 15 === 0
        // print 'FizzBuzz'
    // ELSE IF number MOD 5 === 0
        // print 'Buzz'
    // ELSE IF number MOD 3 === 0
        // print 'Fizz'
    // ELSE 
        // print number
        
for (let i = 1; i <= 20; i++) {
    if (i % 15 ===0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}