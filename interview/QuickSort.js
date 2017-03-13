const quickSort = function(array){
  if(array<=1) return array
  const pivotIndex = Math.floor(array.length/2)
  const pivot = array.splice(pivotIndex,1)[0]
  let left = [];
  let right = [];
  array.forEach(item=>{
    item < pivot ? left.push(item) : right.push(item)
  })
  return quickSort(left).concat([pivot],quickSort(right))
}

const array = [7,3,5,4,9,2,8,8,2,1,8,11,23,17]

const res = quickSort(array)

console.log(res);

export {quickSort}
