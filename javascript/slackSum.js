// 1st sum
let char = "A";
if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    console.log("The character is a Vowel.");   
}
else if(char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
    console.log("The character is a Vowel.");   
}
else {
    console.log("The character is a consonant.");
}

// 2nd sum
let a =10;
let b = 30;
let c = 5;
let maxNumber = Math.max(a,b,c);
console.log(maxNumber);

// 3rd sum

let n = 4;
let countOdd = 1;
for (let i = 1; i <= n; i++){
    console.log(countOdd);
    countOdd +=2;
}

// 4th sum
function discount(a, b){
let d = 10;
let sum = 0;
for(let i = 1; i <= d; i++){
    sum += a ;
    a +=b; 
}
console.log("Day "+d+" : "+sum+" %");

}
discount(5, 2);

// 5th sum
function printAllMultiplesOf5Bet(a, b){
    for(let i = b; i >= a; i--){
        if(i % 5 === 0){
            console.log(i);
        }
    }
}
printAllMultiplesOf5Bet(10,30);