function heapSort(array){
  const lastParent = Math.floor((array.length-2)/2)
  for(let i = lastParent; i >= 0; i--){
    buildMaxHeap(array, i, array.length)
  }

  for(let j = array.length-1; j > 0; j--){
    swapNode(array, 0, j)
    buildMaxHeap(array, 0, j)
  }
  console.log(array);
}

function buildMaxHeap(array, index, length){
  let mid = index
  const left = index * 2 + 1
  const right = index * 2 + 2
  if(array[left] > array[mid] && left < length){
    mid = left
  }

  if(array[right] > array[mid] && right < length){
    mid = right
  }

  if(mid != index){
    swapNode(array, mid, index)
    buildMaxHeap(array, mid, length)
  }
}

function swapNode(array, index1, index2){
  array[index1] = array[index1]^array[index2]
  array[index2] = array[index1]^array[index2]
  array[index1] = array[index1]^array[index2]
}

var array = [7,3,5,4,9,2,8,8,2,1,8,11,23,17]
// var array = [7,3,5,4,9,2,8,10,12]

const res = heapSort(array)

// console.log(res);
