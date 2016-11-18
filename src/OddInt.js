function findOdd(A) {
  let result = A.reduce((a,b)=>{
    if(a.indexOf(b)==-1){
      a = a.concat([b]);
    }else{
      a = a.filter((v)=>v!==b);
    }
    return a;
  },[]);
  return result[0];
};

function findOdd(A) {
  return A.reduce((a,b)=>a^b,0)
}
