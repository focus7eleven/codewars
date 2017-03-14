function Person(name){
  this.name = name;
  this.mankind = 'human'
}


Person.prototype.sayName = function(){
  console.log("My name is ",this.name);
}

const p1 = new Person('kdot')
p1.sayName()

function Rapper(gender){
  this.gender = gender
}

Rapper.prototype = new Person()
Rapper.prototype.constructor = Rapper

const r1 = new Rapper('Male')
console.log(r1.gender);
console.log(r1.mankind);
console.log(Rapper.prototype.constructor === Rapper);
console.log(Rapper.prototype.__proto__ === Person.prototype);
console.log(Rapper.__proto__ === Person);
r1.sayName()
