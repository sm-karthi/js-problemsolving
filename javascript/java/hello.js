let n1 =5;

for (let i = 1; i <= n1; i++) {
    let row = '';
    for (let j = 1; j <= n1; j++) {
        if (i === 1 || i === n1 || j === 1 || j === n1) {
            row += i + ' ';
        } else {
            row += '  ';  // Two spaces
        }
    }
    console.log(row);
}

function func1(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function func2(a, b) {
    return Math.abs(a * b) / func1(a, b);
}


let a = 15;
let b = 20;
let result = func2(a, b);

console.log("Result: " + result);

let n = 3;


for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';  // Add spaces
    }
    for (let j = 1; j <= i; j++) {
        row += i + ' ';  // Add numbers
    }
    console.log(row);
}


for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';  // Add spaces
    }
    for (let j = 1; j <= i; j++) {
        row += i + ' ';  // Add numbers
    }
    console.log(row);
}