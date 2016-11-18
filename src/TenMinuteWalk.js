function isValidWalk(walk) {
  //insert brilliant code here
  return walk.length===10&&(walk.filter((s)=>s==='n').length===walk.filter((s)=>s==='s').length)&&(walk.filter((s)=>s==='w').length===walk.filter((s)=>s==='e').length
}
