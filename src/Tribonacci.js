function tribonacci(signature,n){
  //your code here
  let result = [];
  if(n<3){
    result = signature.slice(0,n);
  }else{
    result = result.concat(signature);
    let index = 0;
    while(index < n-3){
      let snapshot = result.slice(index,index+3);
      let nextOne = snapshot.reduce((a,b)=>a+b,0);
      result.push(nextOne);
      index++;
    }
  }
}
