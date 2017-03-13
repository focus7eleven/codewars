function order(words){
  // ...
  return words.split(' ').sort((a,b)=>a.split('').find((v)=>v<'A') > b.split('').find((v)=>v<'A')).join(' ')
}

order("is2 Thi1s T4est 3a")
