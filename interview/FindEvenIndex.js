function findEvenIndex(arr){
  for (let i=1;i<arr.length-1;i++){
    let sumLeft = arr.slice(0,i).reduce((pre,curr)=>pre+curr,0)
    let sumRight = arr.slice(i+1).reduce((pre,curr)=>pre+curr,0)
    if(sumLeft===sumRight) return i
  }
  return -1
}

// const array = [1,100,50,-51,1,1]

const array = [20,10,30,10,10,15,35]

const res = findEvenIndex(array)

console.log(res);
