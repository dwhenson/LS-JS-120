function Child(name, school) {
  this.name = name;
  this.school = school;
}

Child.prototype = Person.prototype;
Child.prototype.construcutor = Child.prototype;
