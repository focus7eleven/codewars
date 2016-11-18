function alphabetPosition(text) {
  const re = /[^a-zA-Z]/gi
  return str.replace(re,"").split("").join(" ").replace(/[a-zA-Z]/gi,(match,offset,string)=>string.charCodeAt(offset));
}
