const myName = 'Suarpha';
let height = 165
let isFemale = true;
let city;
let stature = null;
let bigNumber = 10n;

console.log(myName, height, isFemale, stature, bigNumber);


const person = {
    name: 'Suarpha',
    height: 165,
    city: 'Stockholm' 
};

console.log(person, city);

person.height = 170;
console.log(person);

person.weight = 55;
console.log(person);

const numbers = [5, 10, 15, 20];
console.log(numbers[2]);
numbers.push(25);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(1);
console.log(numbers);

numbers.shift();
console.log(numbers);

let result = (10 + 5) * 2 / 2; 
console.log(result);



let apple = 3;
let orange = 5;
let total = apple + orange;

let price = 0.49; // price per fruit
let totalPrice = total * price;

console.log(" I have " +apple+ " apples.");
console.log(" You have " + orange + " oranges.");
console.log("We have " + total + "fruits");
console.log("We have bought it for $ " + totalPrice + " USD ");  



