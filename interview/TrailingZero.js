function zeros (n) {
  var zs = 0;
  while(n>0){
   n=Math.floor(n/5);
   zs+=n
  }
  return zs;
}

console.log(zeros(30));
console.log(zeros(100));
console.log(zeros(1000));
console.log(zeros(100000));
