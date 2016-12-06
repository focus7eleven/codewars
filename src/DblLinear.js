function dblLinear(n) {
    // your code
    var arr = [1];
    var y,z;
    var yi=0,zi=0;
    while(arr.length <n+1){
      y = 2 * arr[yi] + 1;
      z = 3 * arr[zi] + 1;
      if(y>z){
        arr[arr.length-1]!=z ? arr.push(z) : null;
        zi++;
      }else{
        arr[arr.length-1]!=y ? arr.push(y) : null;
        yi++;
      }
    }
    return arr[n];
}
