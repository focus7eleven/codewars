const deleteDuplicate = function(array){
  return [...new Set(array)]
}

const deleteDuplicate2 = function(array){
  const hashMap = {}
  const res = []
  array.forEach(item=>{
    if(!hashMap[item]){
      hashMap[item] = true;
      res.push(item)
    }
  })
  return res
}

const array = [7,3,5,4,9,2,8,8,2,1,8,11,23,17]

const result = deleteDuplicate(array)
const result2 = deleteDuplicate2(array)

console.log(result);
console.log(result2);
