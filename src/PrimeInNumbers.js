function primeFactors(n){
  //your code here
  var upper = Math.floor(Math.sqrt(n))
  var primeList={};
  var flag = false;
  while(upper){
    if(n==1) break
    if(flag || isPrime(upper)){
      if(n%upper===0){
        n=n/upper;
        primeList[upper] = primeList[upper] ? ++primeList[upper] : 1;
        flag = true;
      }else{
        flag = false;
        upper--;
      }
    }else{
      upper--;
    }
  }
  var res = ""
  Object.keys(primeList).map((item)=>{
    var temp = primeList[item] === 1 ? item : item+"**"+primeList[item];
    res = res + "(" + temp + ")"
  })
  console.log(res);
  return res
}

function isPrime(num) {
  let factor = Math.floor(Math.sqrt(num));
  let i = 2;
  while(i <= factor){
    if(num%i===0){
      return false;
    }
    i++;
  }
  return true;
}

primeFactors(86240)
