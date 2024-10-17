/* let length=15;
let breadth=20;
let area=length*breadth;
console.log("Area :"+area);

let a=10;
let b=1.732;
let Area=1/4*(b*a*a);
console.log("Area :"+Area);

let A=70;
let fra=A*9/5+32;
let kel=A+273.15;
console.log("fra :"+fra);
console.log("kel :"+kel);

let c=20;
let result=c+20-30*5/4;
console.log("Result :"+result); */
/* let a = [
    {laptop : "apple", price: 2000},
    {laptop : "windows", price: 5000}
];
a[0].modal= 2018;
a[1].modal= 2020;
console.log(a);
for(let i = 0; i < a.length; i++){
    console.log(a[i].price );
} */
/* console.log("REVERSE");
let b = [
    {laptop : "apple", price: 2000},
    {laptop : "windows", price: 5000}
];

for(let i = b.length-1; i >=0; i--){
    console.log(a[i].price );
} */
/* sum = {
    modal: "303",
}
sum.make = "china";
console.log(sum); */

// Compound Interest 
// formula p(1+r/n)pow nt
/* let p = 15000;
let n = 2;
let r = 5/100;
let a = Math.round(p * Math.pow((1 + r / n),n * 4));
//let a = p * (1 + r/n)**n*4;
console.log("Compound Interest : "+a); */

/* let a =["true", "false "];

let b = a.toString().repeat(2);

console.log(b); */

/* let a = 1;
let b = 5;
let str = " ";
for(let i = a; i <= b; i++){
    //str += i+" ";
    str = (i.toString()+" ").repeat(i).trim();
    console.log(str);
        
        //str = "*".repeat(i);
    } */
/* let a = ["Siva"];
let b = a[0].split('').reverse().join('');
console.log(b); */
/* let a = ["Karthikeyan"];
let b = a[0].split('');
let count = 0;
for(let i = 0; i < b.length; i++){
    
    if(b[i] == "a" || b[i] == "e" || b[i] == "i" || b[i] == "o" || b[i] == "u" || b[i] == "A" || b[i] == "E" || b[i] == "I" || b[i] == "O" || b[i] == "U" ){
        count++;
    }
    
}
console.log(count); */

/* let arr = [1, 2, 3, 4, 5];

let empty = [];
for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for(let j = i; j < arr.length; j++){
        sum += arr[j];
    }
    empty.push(sum);
}
console.log(empty);  */

/* function vowelSum(a){
let b = a.toString().split("");
let count = 0;
for(let i = 0; i < b.length; i++){
    if(b[i] == "a" || b[i] == "e" || b[i] == "i" || b[i] == "o" || b[i] == "u"|| b[i] == "A" || b[i] == "E" || b[i] == "I" || b[i] == "O" || b[i] == "U"){
        count++;
    }
}
return count;
}
console.log(vowelSum(["Gopika"])); */

let arr=[100,2220,300,400,500]
  let min = Infinity;
  let secondMin =Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] < secondMin && arr[i] !== min) {
      secondMin = arr[i];
    }
  }
  console.log(min)
  console.log(secondMin) 
  /* function vowelSum(a){
    let b = a.toString();
    let count = 0;
    for(let i = 0; i < b.length; i++){
        if(b[i] == "a" || b[i] == "e" || b[i] == "i" || b[i] == "o" || b[i] == "u"|| b[i] == "A" || b[i] == "E" || b[i] == "I" || b[i] == "O" || b[i] == "U"){
            count++;
        }
    }
    return count;
    }
    console.log(vowelSum("Gopika")); */
