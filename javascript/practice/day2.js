// Day 2 sums
/* for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
} */

    /* function GCD(a, b){
        let c = a > b ? a : b ;
        let str = 0;
        for(let i = 0; i <= c; i++){
            if(a % i == 0 && b % i == 0){
                str = i;
            }
        }
        return str; 
    }
    console.log(GCD(12, 30)); */

    /* function PrimeNumber(n){
        let prime = true;
        for(let i = 2; i < n; i++){
            if(n % i == 0){
                prime = false;
                console.log("Not Prime Number");
                break;
            }
            
        }
        if(prime){
            console.log("Prime Number");
        }
    }
    PrimeNumber(10); */

    /* function LCM(a, b){
        let c = a > b ? a : b ;
        let str = 1;
        for(let i = 0; i <= c; i++){
            if(a % i == 0 && b % i == 0){
                str = i;
                
            }
        }
        return a*b/str; 
    }
    console.log(LCM(44, 78)); */

    /* function gCd(a, b){
        let c = a > b ? a : b ;
        let str = 0 ;
        for(let i = 2; i <= c; i++){
            if(a % i == 0 && b % i == 0){
                str = i;
                break;
            }
        }
        return str; 
    }
    console.log(gCd(15, 30)); */
      //patten sums

                     //        *

                     //       * *

                     //      * * *
/* let n = 3;
let star = "";
for(let i = n; i > 0; i--){
    let str = "";
    for(let j = i-1; j > 0; j--){
        str+= " ";
    }
    star +="* ";
    let result = str+star;
    console.log();
    
    console.log(result); 
} */

/* let a = 3;

for(let i = 1; i <= a; i++){
    let str = "";
    for(let j = a; j >= i; j--){
        str += " ";
    }

        str =str+"* ".repeat(i);
        console.log();
        
        console.log(str);
}  */
    
/* let n = 3;
for(let i = 1; i <= n; i++){
    let str = "";
    let gap = "";
    let result = "";
    for(let j = 1; j <= i; j++){
        str += i;
    }
    for(let k = n-i; k > 0; k--){
        gap +=" ";
    }
    result = gap + str;
    console.log(result);
} */

    /* let n = 3;
    let star = "";
    for(let i = n; i > 0; i--){
        let str = "";
        for(let j = i-1; j > 0; j--){
            str+= " ";
        }
        star +="* ";
        let result = str+star;        
        console.log(result); 
    } */
   /* let n = 3;
   for(let i = 1; i <= n; i++){
    let result = "";
    let gap = "";
    let symbol = "";
    for(let j = 1; j <= i; j++){
        symbol += "*"+" ";
    }
    for(let k = 0; k < n-i; k++){
        gap += " ";
    }
    result = gap +symbol;
    console.log(result);
    
}
    for(let i = n; i >= 1; i--){
        let result = "";
        let gap = "";
        let symbol = "";
        for(let j = 2; j <= i; j++){
            symbol += "*"+" ";
        }
        for(let k = 0; k <= n-i; k++){
            gap += " ";
        }
        result = gap +symbol;
        console.log(result);
        
    } */


/* let n = 5; 
let str = "";
let str1 = 0;
for(let i = 1; i <= n; i++){
    str += i + "";
    str1 += i;
    console.log(str+" = " + str1);
} */


/* let n = 5; 
let str = "";
let str1 = 0;
for(let i = 1; i <= n; i++){
    str += i + "+";
    str1 += i;
    console.log(str.slice(0,-1)+" = " + str1);

} */

/* let n = 3;
    for(let i = 1; i <= n; i++){
     let result = "";
     let gap = "";
     let symbol = "";
     for(let j = 1; j <= i; j++){
         symbol += "*"+" ";         
     }
     for(let k = 0; k < n-i; k++){
         gap += " ";
     }
     result = gap +symbol;
     console.log(result);
     
 } */
    //  * * * * 
    //   * * * * 
    //    * * * * 
    //     * * * * 
     let n = 4;
     
     let gap = "";
     for(let j = 1; j <= n; j++){
        let str = "";
        gap += " ";
     for(let i = 1; i <= n; i++){
        str += "* ";
        
     }
     console.log(gap + str);
     
    }
     
     