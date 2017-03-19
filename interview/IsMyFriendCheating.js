function removeNb(n){
  const sum = (1+n)*n/2
  let res = []
  for(let i=1;i<=n;i++){
    if(!((sum-i)%(i+1))){
      let j = (sum-i)/(i+1)
      j<=n?res.push([i,j]):null
    }
  }
  return res
}

const res = removeNb(26)

console.log(res);
