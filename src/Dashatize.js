function dashatize(num) {
  let raw = num.toString().replace(/[13579]/g,'-$&-').replace(/--/g,'-');
  if(raw.charAt(0)==="-"){
    raw = raw.slice(1);
  }
  if(raw.charAt(raw.length-1)==="-"){
    raw = raw.slice(0,-1);
  }
  return raw;
};
