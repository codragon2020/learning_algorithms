// O(1)  // Assumes the array will have 3 numbers
// function sumNumbers(numbers) {
//     return numbers[0] + numbers[1] + numbers[2]; 
//     }
//     return result;

// console.log(sumNumbers([1, 3, 10]));

function sumNumbers(numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log(sumNumbers([1, 3, 10, 50]));