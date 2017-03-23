/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0
  let j = 0
  let res = 1
  while(j<s.length){
    let sub = s.slice(i,j+1)
    // if(sub.length === new Set(sub).size){
    if(~s.indexOf(s.charAt(j),i)){
      j++
      res = res < sub.length ? sub.length : res
    }else{
      i = s.indexOf(s.charAt(j),i) + 1
    }
  }
  return res
};


const s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

console.log(lengthOfLongestSubstring(s));
