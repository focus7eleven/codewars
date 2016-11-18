decodeMorse = function(morseCode){
  let words = morseCode.split("   ");
  let result = words.map((word)=>{
  	let characters = word.split(" ");
    let res = characters.map((char)=>{
    	return MORSE_CODE.get(char);
    })
    return res.join("");
  })
  return result.join(" ");
}
