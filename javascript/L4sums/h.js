// prime numbers between a & b
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
