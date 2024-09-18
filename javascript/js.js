/* function displayGreeting(name){
    console.log("Hello world"); 
}
displayGreeting("karthi");
 */
// 1st sum
/* calculateArea();
greetUser();
function calculateArea() {
    const PI=3.14;
 const radius = 5;
 let area = PI * radius * radius;
 console.log(area);
}
function greetUser() {
 var userName = "John";
 console.log(userName);
}
// 2nd sum
 let count = 1;
while (count <= 100) {
 console.log("Counting down: " + count);
 count = count + 1;
} 

// 3rd sum
let temperature = 30;
if (temperature === 30) {
 console.log("It's cold outside.");
} else {
 console.log("It's warm outside.");
}

// 4th sum
checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num < 0){
    console.log("Negative");}
  else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}


 */

/* function Sheriff(l,b){
  let area=l*b;
  return area;
}
let c=Sheriff(5,5);
console.log(c); */

/* function isAdult(age) {
  return age >= 18;
}
let result=isAdult(20);
console.log(result); */

/* let a=1;
let b=5;
let str=" ";
while(a<=b){
  str +=" "+a;
  a++;
}
console.log(str); */

function oddNumber(n){
  let str = "";
  for (let i = 1; i <= n; i++){
    let a = 2*i-1;
    str += i + ", "; 
  }
  return str.slice(0,-2);
}
let b = oddNumber(5);
console.log(b);