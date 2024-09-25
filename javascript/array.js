/*let cars = ["Audi", "BMW", "datsun", "Fiat","Ertiga"];
for (let i = 4; i >= 0; i--){
    console.log(cars[i]);
}

console.log("");

let student = ["kottaisamy", "Santhosh" ,"Sheriff", "Shriram", "Suprasanna", "Karthi"];
for(i = 0; i < student.length; i++){
    console.log(student[i]);
}
*/
/*let stu = ["kottaisamy", "Santhosh" ,"Sheriff", "Shriram", "Suprasanna", "Karthi"];
for (i = 0; i < stu.length; i++){
    console.log(i+" . "+stu[i]);
}*/

/* let stud = ["kottaisamy", "Santhosh" ,"Sheriff", "Shriram", "Suprasanna", "Karthi"];
for (i = 0, j = 1; i < stud.length; i++){
    console.log(j+" . "+stud[i]);
    j++;
} */

/* let avengers = ["kottaisamy", "Santhosh" ,"Sheriff", "Shriram", "Suprasanna", "Karthi"];
let str = "";
for (i = 0; i < avengers.length; i++){
    str +=avengers[i]+" ";
}
console.log(str); */
/* let stud = ["kottaisamy", "Santhosh" ,"Sheriff", "Shriram", "Suprasanna", "Karthi"];
for (i = 5, j = 6; i >= 0; i--){
    console.log(j+" . "+stud[i]);
    j--;
} */

   /* let movies = ["Inception", "Interstellar", "The Matrix"];
for (let movie of movies) {
   console.log(movie);
}

let groceries = ["Milk", "Bread", "Eggs"];
groceries.forEach(function(item) {
    console.log(item);
});

let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(num) {
    return num * num;
});
console.log(squares);

 */
// 1st sum

/* let a = [1,2,3,4,5];
for(let i =0; i < a.length; i++){
    console.log(a[i]);
}

// 2nd sum

let string = ["Karthi", "Sups", "Shriram", "Sheriff"];
console.log(string[string.length-3],string[string.length-1]);

// 3rd sum

let b = ["Karthi", "Sups", "Shriram",];
b[1]="modified";
console.log(b);

// 4th sum

let len = ["AA", "DD","SS","MM", "LL","KK", "OO"];
console.log(len.length);

// 5th sum

let algorithm =["Santhosh", "Kottaisamy","Sheriff","Shriram","Sups","Karthi"];
for(let i = 0; i < algorithm.length; i++){
    console.log(algorithm[i]);
}

// 6th sum

let number = [1,2,3,4,5];
let result = 0;
for(let i = 0 ; i < number.length; i++){
    result += number;
}
console.log(result); */

// slack 1st sum
// function train_time(train_departures){
//     let early = train_departures[0];
//    for(let i = 0; i < train_departures.length; i++){
//     if (train_departures[i]<early) {
//         early=train_departures[i];
//     }
//    }
//    return early;
// }
// let a=train_time([10, 15, 7, 20, 5]);
// console.log(a);

// 2nd sum
/* function seats_booking(seats) {
    let tickets_available = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] == 0) {
            tickets_available++;
        }
    }
    return tickets_available;
}
let b = seats_booking([1, 0, 1, 1, 0, 0, 1, 0]);
console.log(b);
// 7th sum
function same_time(landing_times) {
    for (let i = 0; i < landing_times.length; i++) {
        for (let j = i+1; j < landing_times.length; j++) {
            if (landing_times[i] == landing_times[j]) {
                return "yes"
            }
        }
    }
    return "no"
}
console.log(same_time([1, 12, 18, 12, 20]));
 */


/////

/* let arr=[12, 15, 12, 18, 20];
let set_arr=[...new Set(arr)];
if(arr.length!=set_arr.length){
    console.log("yes");
}
else{
    console.log();
} */


/* let arr=[12, 15, 11, 18, 20];
let set_arr=[...new Set(arr)];
console.log(set_arr); */


/* let arr=[12, 15, 18, 15, 20];
arr.sort((a,b)=>a-b);
let istrue=false;

//[12,15,15,18,20]


for (let i = 0; i < arr.length; i++) {
    if (arr[i]==arr[i+1]) {
        istrue=true;  
    }
}





if (istrue) {
    console.log("yes");
    
}
else{
    console.log("no");
    
} */
// 3rd sum
/* function heistNumber(solider){
        let heist = solider[0];
       for(let i = 0; i < solider.length; i++){
        if (solider[i]>heist) {
            heist=solider[i];
        }
       }
       return heist;
    }
    let h=heistNumber([120, 300, 250, 180, 150]);
    console.log(h); */

// 4th sum
// function Average(populations){
//     let sum = 0;
//     let i = 0;
//     for( let a = i; a < populations.length; a++){
//         sum +=populations[a];
//     }
//         return sum/populations.length ;
// }
// let l = Average([50, 60, 70, 80, 90,]);
// console.log(l);

// // 5th sum

// function water(water_level){
//     let lowest = water
// }


/* function digitSum(num){

    let arr=num.toString().split(""); // ['1','2','3','4','5']
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum +  Number(arr[i]);  // '3' ---> 3
    }
    return sum;


}
console.log(digitSum(1234)); */

/* let nestedArray = [["a", "b", "c"], [1, 2, 3], [true, false]];
console.log(nestedArray[2][1]);
 */

/* function digits(number){
    let arrr = number.toString().split("");
    let sums = 0;
    for(let i = 0; i < arrr.length;i++){
        sums = sums + Number(arrr[i]);
    }
    return sums;
}

console.log(digits(2345)); */