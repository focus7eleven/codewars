function tribonacci(signature,n){
  //your code here
  let result = [];
  if(n<3){
    result = signature.slice(0,n+1);
  }else{
    result = result.concat(signature);
    let snapshot = result;
    let nextOne = snapshot.reduce((a,b)=>a+b,0);
  }
}
