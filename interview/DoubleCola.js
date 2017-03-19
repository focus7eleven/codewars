function whoIsNext(names, r){
  //your code here
  const len = names.length
  const target = Math.floor(Math.log2(r/len+1))
  const remain = r - Math.pow(2,target)*len + len
  const index = Math.ceil(remain/Math.pow(2,target))
  return remain?names[index-1]:names[len-1]
}

// const names = ["Sheldon", "Leonard", "Penny"]
const names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]

// const res = whoIsNext(names,1)
const res = whoIsNext(names,14)
// const res = whoIsNext(names,43)
// const res = whoIsNext(names,13)

console.log(res);
