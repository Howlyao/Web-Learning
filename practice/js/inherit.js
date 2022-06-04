class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    // this.x = 2;
  }
  m() {
    // super.print();
    console.log(this.x);
  }
  getB() {
    return this;
  }
}

let b = new B();
b.m(); // 2

console.log(b.getB() === b);
