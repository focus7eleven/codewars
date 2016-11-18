function findPrimesSextuplet(sumLimit) {
    let start = Math.ceil((sumLimit-48)/6);
    while(true){
      let flag = false;
      if(isPrime(start)){
        flag = isPrime(start+4)&&isPrime(start+6)&&isPrime(start+10)&&isPrime(start+12)&&isPrime(start+16)
      }
      if(flag) break;
      start++;
    }
    return [start,start+4,start+6,start+10,start+12,start+16];
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
