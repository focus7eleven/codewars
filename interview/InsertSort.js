const insertSort = function(array){
  const length = array.length;
  for(let i=1;i<length;i++){
    const curr = array[i]
    let j = i;
    for(j=i;j>0&&array[j-1]>curr;j--){
      array[j] = array[j-1]
    }
    array[j] = curr
  }
  return array
}

const array = [7,3,5,4,9,2,8,8,2,1,8,11,23,17]

const res = insertSort(array)

console.log(res);
