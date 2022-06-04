let obj = {
  length: 10,
  [Symbol.iterator]() {
    let self = this;

    return {
      next() {
        if (self.length > 0) {
          return { value: self.length--, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let i of obj) {
  console.log(i);
}
