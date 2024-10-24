// Day 2 Sums
// Question 1

let a = [20, 30, 50, 200, 80, 30, 150];
let max = a[0];
for (let i = 0; i < a.length; i++) {
    if (max < a[i]) {
        max = a[i];
    }
}
console.log(max);

// Question 2

let b = [70, 50, 9, 78, 60, 10];
let min = b[0];
for (let i = 0; i < b.length; i++) {
    if (min > b[i]) {
        min = b[i];
    }
}
console.log(min);

// Question 3

let arr = ["apple", "banana", "grape", "kiwi", "apricot"];
let firstString = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (firstString > arr[i]) {
        firstString = arr[i];

    }

}
console.log(firstString);

// Day 3 Sums
// Question 1
let arrr = ["karthi", "sups", "shriram"];
let s = ["kottai", "sheriff", "karthi"];
let str = "";
for (let i = 0; i < arrr.length; i++) {
    for (let j = 0; j < s.length; j++) {
        if (arrr[i] === s[j]) {
            str += s[j] + ",";
        }
    }
}

console.log(str.slice(0, -1));

// Linear Search
let x = [12, 56, 90, 45, 38, 3]; 
let target = 45;
let result = -1;

for(let i = 0; i < x.length; i++){
    if(x[i] === target){
        result = i;
        break;
    }
}
console.log(result);
