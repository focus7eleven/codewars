// smallest(261235) --> [126235, 2, 0]

function smallest(n) {
  // Your code
  var bits = (''+n).split('');
  var min = Math.min(...bits);
  var lastIndex = bits.lastIndexOf(min);
}

smallest(261235);
