function zero(exp = '') {
  return exp === '' ? 0 : eval(0+exp)
}
function one(exp = '') {
  return exp === '' ? 1 : eval(1+exp)
}
function two(exp = '') {
  return exp === '' ? 2 : eval(2+exp)
}
function three(exp = '') {
  return exp === '' ? 3 : eval(3+exp)
}
function four() {
  return exp === '' ? 4 : eval(4+exp)
}
function five(exp = '') {
  return exp === '' ? 5 : eval(5+exp)
}
function six(exp = '') {
  return exp === '' ? 6: eval(6+exp)
}
function seven(exp = '') {
  return exp === '' ? 7: eval(7+exp)
}
function eight(exp = '') {
  return exp === '' ? 8: eval(8+exp)
}
function nine(exp = '') {
  return exp === '' ? 9: eval(9+exp)
}

function plus(exp) {
  return '+' + exp
}
function minus(exp) {
  return '-' + exp
}
function times(exp) {
  return '*' + exp
}
function dividedBy(exp) {
  return '/' + exp
}

console.log(three(times(two())));
