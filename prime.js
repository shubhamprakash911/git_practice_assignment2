let num = 13 ;

let count = 1 ;

for(i=1;i<=num;i--){
 if(num%i==1){
 count++;
  }
}

if(count==2){
console.log(num,"is a prime number");
}else{
console.log(num,"is not a prime number");
}