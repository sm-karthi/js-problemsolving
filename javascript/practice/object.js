// object
/* let students = {
    Name: "Karthi",
    Age: 18,
    Genter: "Male",
    Mark: 456,
    Address: {
        street: "South Street",
        pin: 20,
    },
}
console.log(students.Address.street); */
/*
    printStudentDetails: function () {
        console.log("Name: " + this.Name);
        console.log("Age: " + this.Age);
        console.log("Address: ");
        console.log("Street: " + this.Address.street);
        console.log("pin: " + this.Address.pin);


    }
}
student.printStudentDetails(); */
/* console.log("Name of student: "+student.Name);
console.log("Age: "+student.Age);
console.log("Genter: "+student.Genter);
console.log("Mark: "+student.Mark);
 */
/* let sum = 0;
let student = {
    marks: [90,90,65,80,80],
    getAveragemarks: function() {
        for(let i = 0; i < student.marks.length; i++){
            sum += student.marks[i];
        }
        sum=sum/student.marks.length;
        return sum;
    }

}
console.log("Average mark: "+student.getAveragemarks()); */

// 1st sum
let a = [50, 100, 40, 30, 70, 200,300];
let sum = 0;
for (let i = 0; i < a.length; i++){
    sum +=a[i];
}
console.log(sum);

// 2nd sum

let student = [90,80,90,70,60];
let sums = 0;
for (let i =0;i < student.length; i++){
    sums += student[i];
}
sums=Math.floor(sums/student.length);
console.log(sums);

// 4th sum
function fun(arr){
    let count = 0;
    for (let i = 0; i <arr.length; i++){
        if(arr[i] % 2 == 0){
            count++;
        }
    }
    return count;
}
console.log(fun([1,2,3,4,5,6]));