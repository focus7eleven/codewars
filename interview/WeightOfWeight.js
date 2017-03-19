function orderWeight(weights) {
  // your code
  return weights.split(' ').sort((a,b)=>{
    let sumA = a.split('').reduce((pre,curr)=>pre+(+curr),0)
    let sumB = b.split('').reduce((pre,curr)=>pre+(+curr),0)
    if(sumA === sumB){
      return a > b ? 1 : -1
    }else{
      return sumA - sumB
    }
  }).join(' ')
}

const weights = '2 81 6 18 72 4 27 7 1 6 4 200 7 9 91 425 31064 7920 67407 96488 34608557 71899703'
// const weights = '2 81 6 7 1 4 4 55 7 9 91'

const res = orderWeight(weights)

console.log(res);
