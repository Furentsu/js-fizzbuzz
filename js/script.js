// SOLUZIONE #1

// let range = [];

// for (let i = 0; i < 101; i++) {
//     range.push(i);
//     if (range[i] % 3 == 0 && range[i] % 5 == 0) {
//         range[i] = "FizzBuzz";
//     } else if (range[i] % 3 == 0) {
//         range[i] = "Fizz";
//     } else if (range[i] % 5 == 0) {
//         range[i] = "Buzz";
//     }
// }

// range.shift();
// console.log(range);

// SOLUZIONE #2 --------------------------------

// let range = [];

// for (let i = 1; i < 101; i++) {
//     range.push(i);
// }

// console.log(range);

// for (let i = 0; i < range.length; i++) {
//     if (range[i] % 3 == 0 && range[i] % 5 == 0) {
//         range[i] = "FizzBuzz";
//     }   else if (range[i] % 3 == 0) {
//         range[i] = "Fizz";
//     }   else if (range[i] % 5 == 0) {
//         range[i] = "Buzz";
// }
// }

// console.log(range);

// SOLUZIONE #3 --------------------------------

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}











