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
