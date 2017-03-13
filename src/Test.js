const foo = {
  name: 'foo',
  log: function(hello) {
    console.log(hello," ",this.name);
  }
}

foo.log("hello")

foo.log.call({name: 'bar'},"goodbye")
foo.log.apply({name: 'leo'},["hey"])


function Person(name) {
  this.name = name;
}

Person.prototype.age = 22;

const kdot = new Person("kdot")
console.log(kdot.age);

const test = {
  name: 'kdot',
  age: 21,
}

console.log(son.name);
