function add(n){
  // Let the currying begin!
  let res = function(m){
    return add(n+m)
  }
  res.valueOf = function(){return n}
  return res
}

// const res = add(1)
const res = add(1)(2)(3)
console.log(res);
