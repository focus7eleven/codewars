// smallest(261235) --> [126235, 2, 0]

function smallest(n) {
  // Your code
  var bits = (''+n).split('');
  var smallest = bits[0];
  var anchor = 0;
  bits.forEach((item,index)=>{
    if(item <= smallest){
      smallest = item;
      anchor = index;
    }
  })
  if(bits.indexOf(smallest)>1){
    bits.splice(anchor,1);
    bits.unshift(smallest);
    var res = Number(bits.join(''));
    console.log(bits);
    return [res,anchor,0]
  }else if(bits.indexOf(smallest)==1){
    var target = bits.shift();
    var i = 0;
    while(bits[i]<=target) i++
    bits.splice(i,0,target);
    // console.log(bits);
    var res = Number(bits.join(''));
    return [res,0,i]
  }else{
    var focus = 1;
    while(focus<bits.length){
      var part = bits.slice(focus);
      var min = Math.min(...part);
      console.log("min:",min,bits,part);
      if(part.indexOf(''+min)+focus==focus){
        focus++;
        anchor=focus;
        console.log(focus,' - ',anchor);
      }else{
        anchor = part.indexOf(''+min)+focus;
        console.log(anchor);
        bits.splice(anchor,1);
        bits.splice(focus,0,min)
        break;
      }
    }
    // console.log(bits);
    if(focus==anchor){
      focus=anchor=0;
    }
    return [Number(bits.join('')),anchor,focus]
  }
}

smallest(199819884756);
