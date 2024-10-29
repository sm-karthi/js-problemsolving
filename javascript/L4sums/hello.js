// // Day 2 Sums
// // Question 1

// let a = [20, 30, 50, 200, 80, 30, 150];
// let max = a[0];
// for (let i = 0; i < a.length; i++) {
//     if (max < a[i]) {
//         max = a[i];
//     }
// }
// console.log(max);

// // Question 2

// let b = [70, 50, 9, 78, 60, 10];
// let min = b[0];
// for (let i = 0; i < b.length; i++) {
//     if (min > b[i]) {
//         min = b[i];
//     }
// }
// console.log(min);

// // Question 3

// let arr = ["apple", "banana", "grape", "kiwi", "apricot"];
// let firstString = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (firstString > arr[i]) {
//         firstString = arr[i];

//     }

// }
// console.log(firstString);

// // Day 3 Sums
// // Question 1
// let arrr = ["karthi", "sups", "shriram"];
// let s = ["kottai", "sheriff", "karthi"];
// let str = "";
// for (let i = 0; i < arrr.length; i++) {
//     for (let j = 0; j < s.length; j++) {
//         if (arrr[i] === s[j]) {
//             str += s[j] + ",";
//         }
//     }
// }

// console.log(str.slice(0, -1));

// Linear Search
let x = [12, 56, 90, 45, 38, 3]; 
let element = 45;
let res = -1;

for(let i = 0; i < x.length; i++){
    if(x[i] === element){
        res = i;
        break;
    }
}
console.log(res);


// binary search
let ar = [10, 40, 79, 140, 280, 330, 460];
let low = 0;
let high = ar.length-1;
let re = -1;
let el = 460;
while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if(ar[mid] === el){
        re = mid;
        break;
    }
    else if(ar[mid] > el){
        high = mid - 1;
    }
    else {
        low = mid + 1;
    }
}
console.log(`The element index is ${re}`);

// // Question 3
// let A = [ 3, 2, 1, 3];
// let count = 0;
// let m = A[0];
// for(let i = 0; i < A.length; i++){
//     if(m < A[i]){
//         m = A[i];
//     }
// }
// for(let i = 0; i < A.length; i++){
//     if(m === A[i]){
//         count++;
//     }
// }
// console.log(`Maximum value is ${m} count ${count}`);

// // Question 4                        
// function patten(n) {

//     for (let i = 1; i <= n; i++) {
//         let line = "";

//         for (let j = 1; j <= i; j++) {
//             line += i + " ";
//         }

//         for (let k = 1; k <= (n - i) * 2; k++) {
//             line += "  ";
//         }

//         for (let j = 1; j <= i; j++) {
//             line += i + " ";
//         }
//         console.log(line);
//     }
// }
// patten(3);


// // Day5 sums
// // Question 1
// let arr = [5, 8, 13, 21];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 13) {
//         console.log("Found 13!");  // Loop continues even after finding 13
//     }
// }

// // Question 2
// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([30, 70, 788, 200, 1000, 406, 550]));

// // Question 3
// function findAlphabeticallyFirst(arr) {
//     let first = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < first) {
//             first = arr[i];
//         }
//     }
//     return first;
// }
// console.log(findAlphabeticallyFirst(["karthi", "arun", "krishna"]));

// // Question 4
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             result = mid;
//             return result;
//             break;
//         } else if (arr[mid] > target) {
//             right = mid - 1;

//         } else {
//             left = mid + 1;
//         }
//     }

//     return result;
// }
// console.log(binarySearch([23, 40, 80, 120, 200, 350, 400], 200));

