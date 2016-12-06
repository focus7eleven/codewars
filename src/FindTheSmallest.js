// smallest(261235) --> [126235, 2, 0]

function smallest(n) {
  // Your code
  var bits = (''+n).split('');
  var smallest = bits[0];
  var anchor = 0;
  bits.forEach((item,index)=>{
    if(item < smallest){
      smallest = item;
      anchor = index;
    }
  })
  console.log(smallest,"index: ",anchor);
  if(anchor>1){
    bits.splice(anchor,1);
    bits.unshift(smallest);
    var res = Number(bits.join(''));
    console.log(bits);
    return [res,anchor,0]
  }else if(anchor==1){
    var target = bits.shift();
    var i = 0;
    while(bits[i]<=target) i++
    bits.splice(i,0,target);
    console.log(bits);
    var res = Number(bits.join(''));
    return [res,0,i]
  }else{
    return [n,0,0]
  }
}

smallest(261235);
