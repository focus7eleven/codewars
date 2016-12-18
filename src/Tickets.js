function tickets(peopleInLine){
  // ...
  // tickets([25, 25, 50]) // => YES
  // tickets([25, 100])

  var tf = [];
  var fif = [];
  var index = 0;
  var result = "YES";
  while(index<peopleInLine.length){
    var item = peopleInLine[index];
    if(item === 25){
      tf.push(item);
    }else if(item === 50){
      if(tf.length>0){
        tf.pop();
        fif.push(item);
      }else{
        result = "NO";
        break;
      }
    }else if(item === 100){
      if(fif.length>0){
        if(tf.length>0){
          fif.pop();
          tf.pop();
        }else{
          result = "NO";
          break;
        }
      }else if(tf.length>2){
        tf.splice(0,3);
      }else{
        result = "NO";
        break;
      }
    }
    index++;
  }
  console.log(result);
  return result;
}

tickets([25,100]);
