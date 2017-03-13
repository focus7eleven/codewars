const bs = function(array){
  const length = array.length
  for(let i = 0; i < length; i++){
    for(let j = i + 1; j < length ; j++){
      if(array[j] < array[i]){
        array[i] = array[i]^array[j]
        array[j] = array[i]^array[j]
        array[i] = array[i]^array[j]
      }
    }
  }
  return array;
}

const array = [7,3,5,4,9,2,8,8,2,1,8,11,23,17]

const res = bs(array)

console.log(res);
