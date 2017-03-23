function doneOrNot(board){
  //your code here

  let data = []
  let left = []
  let middle = []
  let right = []

  for(let i=0;i<9;i++){
    data.push(board[i])
    let col = []
    for(let j=0;j<9;j++){
      col.push(board[j][i])
      j <=2 ? left.push(board[i][j]) : null
      j>2 && j <=5 ? middle.push(board[i][j]) : null
      j>5 ? right.push(board[i][j]) : null
    }
    data.push(col)
    if(i==2||i==5||i==8){
      data.push(left,middle,right)
      left = []
      middle = []
      right = []
    }
  }

  for(let curr of data){
    if(curr.sort().join() !== '1,2,3,4,5,6,7,8,9') return "Try again!"
  }

  return "Finished!"
}

const board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
               [6, 7, 2, 1, 9, 5, 3, 4, 8],
               [1, 9, 8, 3, 4, 2, 5, 6, 7],
               [8, 5, 9, 7, 6, 1, 4, 2, 3],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 6, 1, 5, 3, 7, 2, 8, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 4, 5, 2, 8, 6, 1, 7, 9]]

console.log(doneOrNot(board));
