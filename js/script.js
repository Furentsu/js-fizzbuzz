// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero 
// e per i multipli di 5 stampi "Buzz". 
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

let range = [];

for (let i = 0; i < 101; i++) {
    range.push(i);
    if (range[i] % 3 == 0 && range[i] % 5 == 0) {
        range[i] = "FizzBuzz";
    } else if (range[i] % 3 == 0) {
        range[i] = "Fizz";
    } else if (range[i] % 5 == 0) {
        range[i] = "Buzz";
    }
}

range.shift();
console.log(range);








