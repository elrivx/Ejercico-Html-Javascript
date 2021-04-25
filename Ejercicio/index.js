function printSum(x){
  var sum = 0;
  for (i = 0; i<= x; i++){

    console.log(i);  
    sum = sum+i;
  
  }

  
  return(sum);
}

y = printSum(2);

console.log(y);