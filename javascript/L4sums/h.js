/* // prime numbers between a & b
let a = 10;
let b = 20;
let str ='';
for (let i = a; i <= b; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && i > 1) {
       str += i + ", ";
    }

   
}
console.log(str.slice(0,-2));

// (29 / 10 / 2024 ) Sums
// Question 1

function countOddEven(arr){
    let obj = {};
    let even = 0;
    let odd = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even++;
        }
        else{
            odd++;
        }
    }
    obj.Even = even;
    obj.Odd = odd;
    console.log(obj);
}
countOddEven([1, 2, 3, 4, 5, 6, 7]);

// Question 2
function targetElement(arr, target){
    let firstElement = "";
    let lastElement = "";
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            firstElement = i;
            break;
        }
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j] == target){
            lastElement = j;
        }
    }
    obj.firstElement = firstElement;
    obj.lastElement = lastElement;
    console.log(obj);
}
targetElement([5, 2, 3, 5, 7, 5, 5], 5);

// Question 3
function reverseString(string){
   let a = string.split(" ");
   let b = a.reverse();
   let c = b.join(" "); 
   console.log(c); 
}
reverseString("i love programming very much"); */

// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.

let arr = [4, 5, 1, 2, 5, 3];
let a = arr[0];
let result = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > a){
        a = arr[i];
        result = i;
    }
}
console.log(result);

//Given an array find all the values less than 15 in a new array if not print No Element less than 15.  Example if arr = [4, 15, 8, 25, 30] output is 4, 8. if ar = [19, 89, 90, 18] output No element less than 15

let array = [4, 15, 8, 25, 30];
let emptyArr = [];
for(let i = 0; i < array.length; i++){
    if(15 > array[i]){  
        emptyArr.push(array[i]);
    }
}
if(emptyArr.length === 0){
    console.log("No element less than 15");
}
else{
    console.log(emptyArr);
}

// Implement the linear search algorithm

let aa = [20, 35, 43, 12, 67, 90];
let element = 90;
let res = -1;
for(let i = 0; i < aa.length; i++){
    if(aa[i] === element){
        res = i;
    }
}
console.log(res);
