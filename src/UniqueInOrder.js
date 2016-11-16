var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if(typeof iterable === string){
    iterable = iterable.split("");
  }
  let result = [];
  iterable.map((item)=>{
    if(result[result.length-1] !== item){
      result.push(item);
    }
  })
  return result;
}
