/* let str = "javascript";
console.log(str.charAt(3));
console.log(str.charCodeAt(3));
 */
/* let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2));
 */
/* let str1 = "a";
let str2 = "b";
console.log(str1.localeCompare(str2)); */

// Arrow function
/* let Arrow = (x) => {
    return x * x;
}

console.log(Arrow(4));

let a = (a) => {
    let count = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            console.log(a[i]);
        }
    }
    
}
a([1,2,3,4,5]); */

/*for(let i = 0; i < array.length; i++){
    for(let j = array[i]; j < array[i + 1]; j++ ){
        if(array[i] != j){
            console.log(j);
        }
    }
} */
/* for(let i = array[0]; i <array[array.length-1]; i++){
    if (i!=i+1) {
        console.log(i+1);
    }
   
} */



/* let array = [];
array.sort((a,b)=>a-b)
let arr=[];
for(let i = array[0]; i <array[array.length-1]; i++){
    arr.push(i)
}
arr=arr.filter(x=>!array.includes(x))
console.log(arr); */

// let arr = [1, 2, 3, 4, 5];

// for(let i =0; i < arr.length; i++){
//     let sum = 0;
//     for(let j = 0; j <= i; j++){
//         sum +=arr[j];
        
//     }
//     console.log(sum);
// }

// let sum=0;
// let result=arr.map(x=>{
//     sum+=x;
//     return sum;
// })
// console.log(arr.map(x=>{
//     sum+=x;
//     return sum;
// }));



// let result=Object.entries(obj).sort((a,b)=>a[1]-b[1]).pop();
// console.log(result[0]);

// practice sums
/* let a = 1;
let b = 5;

for(let i = a; i <= b; i++){
    let str = " ";
    for(let j = a; j <= i; j++){
         str += j+" ";
    }
  console.log(str);
}

console.log(" ");
console.log("=================================");
console.log(" ");

let c = 1;
let d = 5;
for(let i = c; i <= d; d--){
    let str = " ";
    for(let j = c; j <= d; j++){
        str += j+" ";
    }
    console.log(str);
}

console.log(" ");
console.log("=================================");
console.log(" ");

let e = 1; 
let f = 5;
for(let i = e; i <= f; i++){
    let str = " ";
    for(let j = e; j <= i; j++){
        str += i+" ";
    }
    console.log(str);
}

console.log(" ");
console.log("===================================");
console.log(" ");

let g = 1;
let h = 5; 
for(let i = g; i <= h; h--){
    let str = " ";
    for(let j = g; j <= h; j++){
        str +=h+" ";
    }
    console.log(str);
}

function string(str) {
    return str.split('').reverse().join('');
}

console.log(string("Karthi"));

let arr = ["karthi", "sups", "shriram"];
arr.reverse();
console.log(arr);

// sort method
let array = [ "Cherry",  "Banana", "Apple"];
array.sort();
console.log(array);

let number = [2, 10, 4, 1, 20];
number.sort((a,b) => a-b);
console.log(number);

//splice method
let ar = [1, 2, 3, 4, 5];
ar.splice(1, 2, "a", "b");
console.log(ar);

//concat method
let arr1 = [1, 2];
let arr2 = [3, 4];
let macth = arr1.concat(arr2);
console.log(macth);

// Arrow function
let arrays= (x) => {
    return x * x;
}
console.log(arrays(2));

let add = (a, b) => a+b;
console.log(add(2,3)); */

//arr = [-4, 3, -9, 0, 4, 1];
/* let PositiveCount = 0;
let NegativeCount = 0;
let ZeroCount = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        PositiveCount++;
    }
    else if(arr[i] < 0){
        NegativeCount++;
    }
    else if(arr[i] == 0){
        ZeroCount++;
    }
}
console.log(PositiveCount / arr.length);
console.log(NegativeCount / arr.length);
console.log(ZeroCount / arr.length); */

/* let n = 6;

for(let i = 1; i <= n; i++){
    let str = "";
    for(let j = n; j >= i; j--){
        str += " ";
    }
        str += "#".repeat(i);
        console.log(str);
} */
/* let a = 1;
let b = 5;
let strs = " ";
for(let i = a; i <= b; i++){
    //str += i+" ";
    strs = (i.toString()+" ").repeat(i).trim();
    console.log(strs);
} */


/* let a=6;
for(let i=1;i<=n;i++){
    console.log(" ".repeat(n-i)+"#".repeat(i));
    
} */
/* let arr = [1, 2, 3, 4, 5];
arr.sort((a,b)=>a-b);
let sum = 0;
let sums = 0;
for(let i = 0; i < arr.length-1; i++){
    sum +=arr[i];  
}
for(let j = 1; j < arr.length; j++){
 
    sums +=arr[j];
}
console.log(sum,sums);

let arr = [1, 2, 3, 4, 5];
arr.sort((a,b)=>a-b);
let sum = 0;
let sums = 0;
for(let i = 0; i < arr.length-1; i++){
    sum +=arr[i];  
    sums +=arr[i+1];  
}

console.log(sum,sums);
 */

/* let arr = [1, 2, 3, 4, 5];
arr.sort((a,b)=>a-b);
let sum=0;
for(let i = 0; i < arr.length; i++){
    sum +=arr[i];   
}

console.log(sum-arr[arr.length-1],sum-arr[0]);

let arr2 = [1, 2, 3, 4, 5];
let sum2=0;
for(let i = 0; i < arr2.length; i++){
    sum2 +=arr2[i];   
}

console.log(sum2-Math.max(...arr2),sum2-Math.min(...arr)); */

/* let arr3 = [1, 2, 3, 4, 5];
let sum=arr.reduce((a,b)=>a+b);
console.log(sum-Math.max(...arr),sum-Math.min(...arr));
 */

/* let arr = [3, 2, 1, 3];
let array = Math.max(...arr);
let count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] == array){
        count++;
    }
} 
console.log(count);*/

/* let arrays = [1, 2, 3, 4, 5, 6];
let empty = [];
for(let i = 0; i < arrays.length; i += 2){
    empty.push(arrays[i]);
}
console.log(empty); */

/* let users = 1;
user = 2;
let ab = ["toy"];
let bb = "choclate";
let empty = [];
if(user == 1){
    empty.push(bb);
    console.log(empty);
}
else if(user == 2){
    let c = ab[0].split('').join('');
    console.log(c);
}
else{
    console.log([]);
} */
 /* let arr = [1, 2, 3, 4, 5];

let empty = [];
for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for(let j = i; j < arr.length; j++){
        sum += arr[j];
    }
    empty.push(sum);
}
console.log(empty); 
 */
/* let n=3;
let a=5;
let b=7;
let array=[];
for(let i=1; i<=n; i++){
    let num1=(n-i)*a;
    for(let j=n; j>=1; j--){
        num1+=(n-j)*b;
        array.push(num1);
    }
}
console.log(array); */

/* function Fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    if(n == 2){
        return 1;
    }
    let a = [0, 1];
    let sum = a[0] + a[1];
    for(let i = 2; i < n; i++){
        a[i] = a[i-1] + a[i-2];
        sum+=a[i];
    }
    return sum;
}
console.log(Fibonacci(5)); */

/* function sumFibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 0;
    if (n === 2) return 1;

    let fib = [0, 1];
    let sum = fib[0] + fib[1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        sum += fib[i];
    }

    return sum;
}

const n = 5;
console.log(`Sum of the first ${n} Fibonacci numbers:`, sumFibonacci(n)); */

/*
* fibonacci(5) will print 1, 1, 2, 3, 5
* Assuming n is always greater than 0 
* n = 1, print 1
* n = 2, print 1, 1
*/
/* function fibonacci(n) {
    if (n === 1) {
        console.log("1");
        return;
    }
    if(n === 2) {
        console.log("1, 1");
        return;
    }

    let outputStr = "1, 1";
    let pTerm = 1; // Previous Term
    let ppTerm = 1;// Previous Pervious Term

    for (let i = 3; i <= n; i++) {
        currTerm = pTerm + ppTerm;
        ppTerm = pTerm;
        pTerm = currTerm;
        outputStr = outputStr + ", " + currTerm;
    }
    console.log(outputStr);
}
fibonacci(7); */

/* function fibonacci(n){
    if(n == 1){
        return n;
    }
    if(n == 2){
        return n;
    }
    let str = "1, 1";
    let pTerm = 1;
    let ppTerm = 1;
    for(let i = 3; i <= n; i++){
        cuTerm = pTerm + ppTerm;
        ppTerm = pTerm;
        pTerm  = cuTerm;
        str +=", "+cuTerm;
    }
    return str;
}
console.log(fibonacci(7)); */

/* let arr = [2, 7, 5, 1];
let empty = [];
let length = arr.length
for(let i = 0; i < length; i++){
    let a = Math.min(...arr);
   let index = arr.indexOf(a);
   arr.splice(index,1);
   empty.push(a);
}
console.log(empty); */

let a = ["malayalam"];
let d = a.toString();
let b = d.split("").reverse().join("");
if(d === b){
    console.log("Yes");
}
else{
    console.log("No");
}





   


