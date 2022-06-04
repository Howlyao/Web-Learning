// let arr = [1, 2, 3, 4];
let arr = [];
function initial () {
  for (let i = 0; i < 4; i++) {
    let obj = {};
    obj.x = i;
    arr.push(obj);
  }
}

initial();
function print (arr) {
  for (let i of arr) {
    console.log(i.x);
  }
}

print(arr);

for (let i of arr) {
  i.x = i.x + 1;
}

print(arr);

// 