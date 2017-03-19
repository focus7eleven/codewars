// const testMatrix = [
//   [1,2,3,4,5,6],
//   [6,5,4,3,2,1],
//   [1,2,3,4,5,6],
//   [6,5,4,3,2,1],
// ]
const testMatrix = [
  [1,2,4],
  [6,5,3],
  [5,2,3],
]

function getPath(matrix,m,n,path){
  // console.log(path);
  if(m==0){
    let sum = 0
    for(let i=0;i<=n;i++){
      sum += matrix[0][i]
    }
    return sum
  }
  if(n==0){
    let sum = 0
    for(let i=0;i<=m;i++){
      sum += matrix[i][0]
    }
    return sum
  }
  const leftPath = path.concat([[m-1,n]])
  const left = getPath(matrix,m-1,n,leftPath)
  const upPath = path.concat([[m,n-1]])
  const up = getPath(matrix,m,n-1,upPath)
  if( left > up ){
    path.push([m-1,n])
  }else{
    path.push([m,n-1])
  }
  return Math.max(left,up) + matrix[m][n]
}

let longestPath = [[2,2]]

console.log(getPath(testMatrix,2,2,longestPath));
console.log(longestPath);
