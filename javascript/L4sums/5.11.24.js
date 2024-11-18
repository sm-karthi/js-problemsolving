// 1. Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"] output is Abraham

function maximumLetter(arr) {

    let l = arr[0].length;
    let n = "";
    for (let i = 0; i < arr.length; i++) {
        if (l < arr[i].length) {
            l = arr[i].length;
            n = arr[i];
        }
    }
    return n;
}
console.log(maximumLetter(["Ram", "Abraham", "Peter"]));

// 2. In an array of string, return all the string which start with the letter 'a' (Case insensitive) for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali

function ALetters(arr) {
    let str = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] === "a" || arr[i][0] === "A"){
            str += arr[i]+", ";
        }
    }
    return str.slice(0,-2);
}
console.log(ALetters(["apple", "Ali", "mango","Brush"]));

// 3. Reverse a string without using library functions.

let n = "Karthi";
let str = "";
for(let i = n.length-1; i >= 0; i--){
    str += n[i];
}
console.log(str);

//[1, 2, 3, 4, 5] Out put is : 5, 4, 3, 2, 1
let a = [1, 2, 3, 4, 5];
let s = "";
for(let i = a.length-1; i >= 0; i--){
    s += a[i] + ", ";
}
console.log(s.slice(0, -2));


function printStar(n) {
    // Upper half of the pattern
    for (let i = 1; i <= n; i++) {
        let g = "";  // Leading spaces
        let str = "";  // Star pattern for current row
        for (let j = 1; j <= n - i; j++) {
            g += " ";
        }
        for (let k = 1; k <= i; k++) {
            str += k + " ";
        }
        console.log(g + str);
    }

    // Lower half of the pattern
    for (let i = n - 1; i >= 1; i--) {
        let g = "";  // Leading spaces
        let str = "";  // Star pattern for current row
        for (let j = 1; j <= n - i; j++) {
            g += " ";
        }
        for (let k = 1; k <= i; k++) {
            str += k + " ";
        }
        console.log(g + str);
    }
}

printStar(3);


function calculateTotalCost(arr) {
    // Define prices for each item
    const prices = {
        M: 500,   // Mug
        J: 3000,  // Jeans
        T: 1500,  // T-shirt
        P: 10     // Pen
    };
    
    let totalCost = 0;

    // Use a normal for loop to iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Split item into code and quantity
        let [code, quantity] = arr[i].split(" ");
        quantity = parseInt(quantity);

        // Calculate cost for the item and add to total cost
        totalCost += prices[code] * quantity;
    }

    return totalCost;
}

// Test the function
const arr = ["M 3", "J 1", "T 2"];
console.log(calculateTotalCost(arr));  // Output: 7500



function countDistinctVowels(str) {
    const vowels = "aeiou";  // String of vowels
    let distinctVowels = "";

    for (let char of str) {
        if (vowels.includes(char) && !distinctVowels.includes(char)) {
            distinctVowels += char;  // Add only distinct vowels
        }
    }

    return distinctVowels.length;  // Number of distinct vowels
}

// Test cases
console.log(countDistinctVowels("cool"));         // Output: 1
console.log(countDistinctVowels("hello"));        // Output: 2
console.log(countDistinctVowels("beautiful"));    // Output: 5
console.log(countDistinctVowels("javascript"));   // Output: 3
console.log(countDistinctVowels("aeiouaeiou"));   // Output: 5



let aa = "Hi ramya I Would like to meet You";
aa = aa.split(" ");
for(let i = 0; i < aa.length; i++){
    if(aa[i][0] === aa[i][0].toUpperCase()){
        console.log(aa[i]);
    }
}


let string = "Kottaisamy";
string = string.split("");
let bb = ''; 
for(let i = string.length-1; i >= 0; i--){
    bb += string[i];
}
console.log(bb);


function loop(str){
    let result = "";
    for(let i = str.length-1; i >= 0;i--){
        result+=str[i];
    }
    console.log(result);
}
loop("Krishnamoorthy Duraisamy");


// count letter

let l = "hello world";
l = l.split(" ");
let count = 0;
for(let i = 0; i < l.length; i++){
    count++;
}
console.log("Count is "+count);
