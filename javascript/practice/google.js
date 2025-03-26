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

/* let a = ["malayalam"];
let d = a.toString();
let b = d.split("").reverse().join("");
if(d === b){
    console.log("Yes");
}
else{
    console.log("No");
} */

    /* let a = 10;
    let b = 15;
    let str = "";
    for(let i = b; i > a; i--){
        if(i % 2 == 0){
           str += i + " ";
        }
    }
    console.log(str);

    let aa = 10;
    let bb = 15;
    let cc = 40;
    
        if(aa < cc && bb > cc){
            console.log("Yes");
            
        }
        else{
            console.log("No");
            
        } */

    /* let array = [11, 22, 77, 90, 60, 55];
    let emptyArray = [];
    for(let i = 0; i <array.length ; i++){
        if(array[i] % 11 == 0){
            emptyArray.push(array[i]);
        }
    }
    console.log(emptyArray.reverse()); */

    /* let a = 4;
    let b = 10;
    let sum = a + b;
    if(sum % 7 == 0){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
  */
 /* let a = 5; 
 let b = 10;
 let sum = 0;
 for(let i = a + 1; i < b; i++){
    sum += i;
 }
 console.log(sum);
     */

    /* let a = 10;
    if(a % 2 !== 0){
        console.log("This odd number");
    } 
    else {
        console.log("This is even number change a number");
    } */
    
        /* let number=[100,200,300,450,500,400];
        let highest =number[0];
        let second =number[0];
        for(let i=0; i<number.length; i++){
            if(highest<number[i]){
                 second=highest
                highest =number[i]
            }
         else if(second<number[i]){
                second =number[i]
            }
        }
        console.log(second) */            

/* let a = 12;
let carNumber = [123, 344, 579, 688];
let fine = [250, 500, 350, 200];
let sum = 0;
for(let i = 0; i < carNumber.length; i++){
    if(a % 2 == 0 && carNumber[i] % 2 !==0){
        sum += fine[i];
    }
    else if(a % 2 !== 0 && carNumber[i] % 2 == 0){
        sum += fine[i];
    }
}
console.log(sum); */

/* let n = 8;
let aa ="";
for(let i = 1; i <= n; i++){
    if(i % 2 != 0 && i % 3 != 0){
        aa ="prime number";
    }
    else {
        aa ="Not prime number";
    }
}
console.log(aa); */


/* let c = 1;
let d = 5;
for(let i = c; i <= d; d--){
    let str = " ";
    for(let j = c; j <= d; j++){
        str += j+" ";
    }
    console.log(str);
} */

/* let d=5;
for(let i=1; i<=d; d--){
    let str =" "
    for(let j=1;j<=d;j++){
        str=str+j+" "
    }
    console.log(str)
} */
/* 
let num = 53;
let isPrime = true;

if(num <= 1){
    isPrime = false;
}
else {
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
}
if(isPrime){
    console.log(num + " is prime number");
}
else {
    console.log(num + " is a not prime number");
} */

    /* function primenumber(n) {
        if (n <= 2) return "thi is a prime number";
        for (let i = 2 ; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return "This is not a prime number";
            }
        }
        return "This is a Prime Number";
    }
    console.log(primenumber(35)); */

    /* let str = "";
    for(let i =1; i <= 5; i++){
        let a = i * 5;
        str += a +",";
    }
    console.log(str.slice(0,-1)); */

    /* let arr = [4, 1, 9, 29, 5];
    let empty = [];
    let start = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
        if(arr[j] < start){
            start = arr[j];
        } 
    }    
    empty.push(start);
}
    
    console.log(empty);     */

    /* function sortWithoutSort(a){
        for(let i = 0;i<a.length;i++){
            for(let j = i+1;j<a.length;j++){
                if(a[j]<a[i]){
                    /* let temp = a[i];
                    a[i] = a[j];
                    a[j]=temp; 
                    [a[i],a[j]]=[a[j],a[i]];
                }
                
            }            
        }
        return a;
    }
    let array = [9, 11, 1, 5, 8];
    console.log(sortWithoutSort(array)); */

    /* let n = 3;

for(let i = n; i >= 1; i--){
    let str = "";
    for(let j = 1; j <= i; j++){
        str += "* ";
    }
        
        console.log(str.trim());
}  */
/* let n = 3; 
let str = "";
for(let i = 1; i <= n; i++){
    str +=i+" ";
    console.log(str);
}
 */

let a = ["1, 2, 3, 4, 5"];
let b = a.toString().split("").join("");
let str = 0;
for(let i = 0; i < b.length; i++){
    str += b[i];
}
console.log(str);

