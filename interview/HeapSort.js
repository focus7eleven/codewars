// function heapSort(array){
//   const lastParent = Math.floor((array.length-2)/2)
//   for(let i = lastParent; i >= 0; i--){
//     buildMaxHeap(array, i, array.length)
//   }
//
//   for(let j = array.length-1; j > 0; j--){
//     swapNode(array, 0, j)
//     buildMaxHeap(array, 0, j)
//   }
//   console.log(array);
// }
//
// function buildMaxHeap(array, index, length){
//   let mid = index
//   const left = index * 2 + 1
//   const right = index * 2 + 2
//   if(array[left] > array[mid] && left < length){
//     mid = left
//   }
//
//   if(array[right] > array[mid] && right < length){
//     mid = right
//   }
//
//   if(mid != index){
//     swapNode(array, mid, index)
//     buildMaxHeap(array, mid, length)
//   }
// }
//
// function swapNode(array, index1, index2){
//   array[index1] = array[index1]^array[index2]
//   array[index2] = array[index1]^array[index2]
//   array[index1] = array[index1]^array[index2]
// }

function heapSort(array){
  const lastParent = Math.floor((array.length-2)/2)
  for(let i = lastParent; i>=0; i--){
    buildMaxHeap(array,i)
  }

  let curr
  let res = []
  while(curr = array.shift()){
    res.push(curr)
    buildMaxHeap(array,0)
  }
  return res
}

function buildMaxHeap(array,root){
  let newRoot = root
  const left = 2 * root + 1
  const right = 2 * root + 2
  if(left<array.length && array[left] > array[newRoot]){
    newRoot = left
  }
  if(right<array.length && array[right] > array[newRoot]){
    newRoot = right
  }
  if(newRoot !== root){
    [array[root],array[newRoot]] = [array[newRoot],array[root]]
    buildMaxHeap(array,newRoot)
  }
}

var array = [7,3,5,4,9,2,8,8,2,1,8,11,23,17]
// var array = [7,3,5,4,9,2,8,10,12]

const res = heapSort(array)

console.log(res);


// Key Points
// 先建一格最大堆
// 建立最大堆，是从最后一个父节点开始的，依次往前
// 对每个父节点，进行下沉操作。
// 所谓下沉，就是判断这个父亲有没有儿子比他大，如果有，就把这个父亲下沉，并递归。（因为可能出现上面一个特别小的数，要一层一层沉下来）
// 然后从最后一个父节点到第一个父节点都下沉完毕后
// 最大堆就建好了
// 之后，有两种方法进行排序
// 1. 每次都取出根节点（最大的那个），然后在进行buildHeap，这样会得到一个从大到小的排序
// 2. 每次将根节点与树中的最后一个节点交换位置，交换完之后，除去最后一个点的情况下（array的length减1），进行buildHeap，
//    这样子每次都会把最大的那个点放到堆的靠后位置，这样就可以得到一个从小到大的排序。
