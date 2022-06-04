class SingleTon {
  static singleton = null;
  static flag = false;
  constructor() {
    if (SingleTon.singleton === null) {
      SingleTon.singleton = this;
      return this;
    } else {
      return SingleTon.singleton;
    }
  }
  get x() {
    return "hello x";
  }
}

// const x = new SingleTon();
// const y = new SingleTon();
// console.log(x.x);

const x = {};
x[Symbol.replace] = (...s) => console.log(s);

"Hello".replace(x, "World");
////////////
class User {
  constructor() {
    if (new.target !== User) {
      return;
    }
    if (!User._instance) {
      this.name = "xm";
      User._instance = this;
    }
    return User._instance;
  }
}

const u1 = new User();
const u2 = new User();
console.log(u1 === u2);
