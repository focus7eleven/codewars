function digPow(n, p){
  // ...
  var digits = (''+n).split('');
  var sum = digits.reduce((pre,cur)=>{
    pre = pre + Math.pow(cur,p);
    p++;
    return pre;
  },0)
  return sum%n ? -1 : sum/n
}
