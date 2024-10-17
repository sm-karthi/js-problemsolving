// let n="15";
// console.log(typeof(+n));

// let arr=[1,2,3,4,6,8]
/* let map_arr=arr.map(x=>x*x)
console.log(map_arr); */

// let sum_arr=arr.map(x=>arr.reduce((a,b)=>a+b))
// console.log(sum_arr);


// let even_arr=arr.filter(x=>x%2==0)
// console.log(even_arr);


// prime-- 1 or num
// <=1
// 2 prime even




// function isPrime(n) {
//     if(n<=1) return "not prime"
//     if(n==2) return "prime"
//     for(let i=2;i<n;i++){  // 2,3,4
//         if (n%i==0) {
//             return "not prime"
//         }
//     }
//     return "prime"
// }
// console.log(isPrime(7));
// console.log(isPrime(49));
// console.log(isPrime(121));



// function isPrime(n) {
//     if(n<=1) return "not prime"
//     if(n==2) return "prime"
//     for(let i=2;i<=Math.sqrt(n);i++){  // 2,3,4
//         if (n%i==0) {
//             return "not prime"
//         }
//     }
//     return "prime"
// }
// console.log(isPrime(7));
// console.log(isPrime(49));
// console.log(isPrime(121));  



// function isPrime(n) {
//     return n<=1?"not prime":n==2?"prime":[...Array(n).keys()].slice(2).some(x=>n%x==0)?"not prime":"prime"
// }
// console.log(isPrime(1191));
  
/* let str="arumugakani";
let obj={};
for(let i=0;i<str.length;i++){
    obj[str[i]]=(obj[str[i]]||0)+1;
}
let values=Object.values(obj)
// console.log(values);
let keys=Object.keys(obj);
// console.log(keys);
console.log(keys[values.indexOf(Math.max(...values))]);
 */


// obj={
//     a:1;
//     r:1;
//     u:1;
//     m:1;
// }

/* function kudakaMandaka(arr){
    let empty1 = [];
for(let i = 0; i < arr.length; i++){
    let empty = [];
    for(let j = arr.length-1; j >= 0; j--){
        empty.push(arr[j][i]);
        
    }
    empty1.push(empty);
}
console.log(empty1);

}
kudakaMandaka([ [1,2,3], [4,5,6], [7,8,9] ]); */

function secondSum(num){
    let empty = [];
    for(let i = 0; i < num.length; i++){
        let sum = 0;
        for(let j = 0; j < num.length; j++){
            sum *= num[j]; 
        }
    }
}
secondSum([1, 2, 3, 4]);