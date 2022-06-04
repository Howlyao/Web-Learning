class Animal {
  protected name: string;
  constructor(theName: string) { this.name = theName; }
}
// new Animal("Cat").name;

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  call () :void {
    console.log(this.name);
  }
}

let dog = new Dog('haha');
dog.call();