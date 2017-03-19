const queensNum = 8

let solution = 0

let m = []
for(let i=0;i<queensNum;i++){
  m.push([])
  for(let j=0;j<queensNum;j++){
    m[i].push(0)
  }
}

function solve(n){
  for(let j=0;j<queensNum;j++){
    m[n][j]=1;
    if(check(n,j)){
      n == (queensNum-1) ? output() : solve(n+1)
    }
    m[n][j]=0
  }
}

function check(row,col){
  if(row==0) return true

  // 判断纵向没有别的棋子
  for(let i=0;i<row;i++){
    if(m[i][col]===1) return false
  }

  // 判断对角线上没有别的旗子
  let x = row-1
  let y = col-1
  while(x>=0&&y>=0){
    if(m[x][y]===1) return false
    x--;
    y--
  }
  x = row-1
  y = col+1
  while(x>=0&&y<queensNum){
    if(m[x][y]===1) return false
    x--;
    y++
  }

  return true;
}

function output(){
  solution++
  // console.log(m);
}


solve(0)
console.log(solution);
