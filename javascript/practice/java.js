/* let x=2;
let y=4;
let z=5;
console.log(x+' '+y+' '+z);

let name="Priyanka";
let age=25;
let total=455.8;
console.log("Name:"+name);
console.log("Age:"+age);
console.log("Total Marks:"+total);

//converting float to integer
let agestr="23";
let agenum = parseInt(agestr)+20;
console.log(agenum);

//converting str to float
let pistr=23.4;
let pinum=parseFloat(pistr);
console.log(pinum);

// Converting Float to Int
let numF = 31.01;
console.log(numF);

////Remove the fractional digits
let numint=Math.trunc(numF);
console.log(numint);
 */

/* let mark = 90;
let grade = mark > 85 ? "A" : "B" ;
console.log(grade); */


/* let marks = 69;
let grades = marks > 95 ? "A" : marks > 84 ? "B" : marks > 70 ? "C" : "D";
console.log(grades);// 4th sum
let len = [""];
 */

// moodle pratice
// 1st sum
let A = 1900;
if(A % 4 == 0 && A % 100 !==0 || A % 400== 0){
    console.log("YES");
}
else {
    console.log("NO");
}
// 2nd sum
/* while (value) {
    sum +=value % 10;
    value = Math.floor(value / 10);
}
console.log(sum); */
let sum = 0;
let value = 1569;
for(let i = 0; i < value.length; i++){
value.split(",");
sum += value;
}
console.log(sum);
    
