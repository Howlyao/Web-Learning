let origin = {
  x: 1,

}
let target = {
  y: 2,
  get z () {
    return 3
  },
  set z (value) {
    this.z = value;
  },
  jump () {
    return false;
  }
}

function mixins(target, mixin) {
  let props = Object.getOwnPropertyNames(mixin);
  for (let prop of props) {
    let desc = Object.getOwnPropertyDescriptor(mixin, prop);
    // desc.enumerable = false;
    Object.defineProperty(target, prop, desc);
  }
}


mixins(origin, target);

let props = Object.getOwnPropertyNames(origin);

for (let prop of props) {
  console.log(Object.getOwnPropertyDescriptor(origin, prop));
}

console.log(...x);