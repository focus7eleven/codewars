// const bar = Symbol('bar');
// const snaf = Symbol('snaf');
//
// export const class myClass{
//
//   // 公有方法
//   foo(baz) {
//     return this[bar](baz);
//   }
//
//   // 私有方法
//   [bar](baz) {
//     return this[snaf] = baz;
//   }
//
// };
//
// const mc = new myClass()
// const res = mc.foo("kdot")
// console.log(res);
//
// const res2 = mc[bar]("jcole")
// console.log(res2);

function Animal(name,gender){
  this.kind = '动物'
  this.name = name
  this.gender = gender
}

function Cat(name,gender){
  Animal.apply(this,arguments)
}

Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

const cat1 = new Cat('kdot','male')
console.log(cat1);

console.log(Object.prototype.toString.call(cat1));
