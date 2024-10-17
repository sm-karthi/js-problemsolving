let user = 1;
user = 2;
let a = ["toy"];
let b = "choclate";
let emty = [];
if(user != b){
    emty.push(b);
    console.log(emty);
}
for(let i = user; i == 2; i++){
    let c = a[0].split('').join('');
    console.log(c);
}
 
// correct code
let users = 1;
users = 2;
let ab = ["toy"];
let bb = "choclate";
let empty = [];
if(users == 1){
    empty.push(bb);
    console.log(empty);
}
else if(users == 2){
    let c = ab[0].split('').join('');
    console.log(c);
}
else{
    console.log([]);
}