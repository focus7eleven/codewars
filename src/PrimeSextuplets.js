function findPrimesSextuplet(sumLimit) {
    let start = Math.ceil((sumLimit-48)/6);
    while(true){
      let factor = Math.floor(Math.sqrt(start));
      let i = 2;
      let flag = true;
      while(i < factor){
        if(start%i==0){
          flag = false;
          break;
        }
        i++;
      }
      if(flag){
        break;
      }
      start++;
    }
    return start;
}
