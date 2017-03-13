function primeFactors(n){
  //your code here
  let currentFactor = 2;
  var primeList={};

	while (n !== 1) {
		if (n % currentFactor === 0) {
      primeList[currentFactor] = primeList[currentFactor] ? ++primeList[currentFactor] : 1;
			n /= currentFactor;
			currentFactor = 2;
		} else {
			currentFactor++;
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

primeFactors(86240)
