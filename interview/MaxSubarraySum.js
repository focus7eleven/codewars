var maxSequence = function(arr){
  // ...
  let sum = 0
  let max = 0
  for(let i=0;i<arr.length;i++){
    if((sum + arr[i]) <= 0){
      sum = 0
    }else{
      sum += arr[i]
      max = sum>max ? sum : max
    }
  }
  return max
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSequence(arr));
