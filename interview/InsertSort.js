// const insertSort = function(array){
//   const length = array.length;
//   for(let i=1;i<length;i++){
//     const curr = array[i]
//     let j = i;
//     for(j=i;j>0&&array[j-1]>curr;j--){
//       array[j] = array[j-1]
//     }
//     array[j] = curr
//   }
//   return array
// }


function insertSort(arr){
  arr.forEach((item,i)=>{
    const curr = item
    let j
    for(j=i;j>0&&arr[j-1]>curr;j--){
      arr[j] = arr[j-1]
    }
    arr[j] = curr
  })
  return arr
}

const array = [7,3,5,4,9,2,8,8,2,1,8,11,23,17]

const res = insertSort(array)

console.log(res);

// Key Points
// 指针从头开始遍历
// 对于指向的每一个item，判断它前面的所有items有没有比他大的
// 如果遇见比他大的，就把这个大的往后挪一格
// 直到遇到没他大的，记录当前的位置j
// 就把这个item插入当前的这个位置j。
