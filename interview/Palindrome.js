const pldrm = function(str){
  return str.split('').reverse().join('') === str
}

const res = pldrm('redivider')
const res2 = pldrm('redividerr')

console.log(res);
console.log(res2);
