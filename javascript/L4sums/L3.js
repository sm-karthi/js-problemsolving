// 1st sum
// 18, 12
function coPrime(a, b) {
    let c = a < b ? a : b;
    let str = "";
    for (let i = 1; i < c; i++) {
        if (a % i == 0 && b % i == 0) {
            str = i;
        }
    }
    let prime = true;
    for (let j = 2; j < str; j++) {
        if (str % j == 0) {
            prime = false;
            return "Not a Co prime";
            break;
        }
    }
    if (prime) {
        return "Co prime";
    }
}
console.log(coPrime(18, 12));


// Question 2

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && i > 1) {
       sum += i ;
    }

   
}
console.log(sum);

// Question 3
let a = 13;
let b = a.toString().split("");
let summ = 0;

for(let i = 0; i < b.length; i++){
    summ += Number(b[i]);
}
    let cc = Number(summ);
    if(a % cc == 0){
        console.log("Harshad");
    }
    else{
        console.log("Not Harshad");
    }

    

