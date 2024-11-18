// 1st sum
let n = "Hello!, macha sheriff. How are you";
console.log(n.split(" ").length);

// 2nd sum

function patten(n){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i=1; i<=n; i++){
        let res="";
        for(let j=1; j<=n-i; j++){
            res=res+" ";
        }
        for(let k=0; k<i; k++){
            res=res+alphabet[k]+" ";
        }
        console.log(res);
    }
    for(let i=n-2; i>=0; i--){
        let res="";
        for(let k=1; k<n-i; k++){
            res=res+" ";
        }
        for(let j=0; j<=i; j++){
            res=res+alphabet[j]+" ";
        }
        console.log(res);
    }
}
patten(3);

// Add sum 
let a = 10;
let str = "";
for(let i = 1; i <= a; i++){
    if(i % 2 !== 0){
        if(i === a || i === a-1){
            str += i;
        }
        else{
            str += i + ", ";
        }
    }
}
console.log(str);
