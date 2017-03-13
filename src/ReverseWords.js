function reverseWords(str) {
  // Go for it
  var words = str.split(' ');
  return words.map((item)=>{
    return item.split('').reverse().join('');
  }).join(' ')
}
