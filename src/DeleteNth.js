function deleteNth(arr,x){
  // ...
  var dataMap = {};
  var res = [];
  arr.forEach((item,index)=>{
    if(!dataMap[item]){
      dataMap[item]=1;
      res.push(item)
    }else{
      if(dataMap[item]<x){
        res.push(item)
        dataMap[item]++;
      }
    }
  })
  return res;
}

function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
