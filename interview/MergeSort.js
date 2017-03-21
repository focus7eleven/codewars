function merge(a,b){
  let res = []
  let i = 0
  let j = 0
  while(i<a.length && j<b.length){
    if(a[i] < b[j]){
      res.push(a[i])
      i++;
    }else{
      res.push(b[j])
      j++
    }
  }
  return res.concat(a.slice(i),b.slice(j))
}

function mergeSort(array){
  if(array.length==1) return array
  return merge(mergeSort(array.slice(0,array.length/2)),mergeSort(array.slice(array.length/2)))
}


const array = [7,3,5,4,9,2,8,8,2,1,8,11,23,17]

console.log(mergeSort(array));
