/*
 * @Author: howlyao 741368914@qq.com
 * @Date: 2022-06-04 14:27:48
 * @LastEditors: howlyao 741368914@qq.com
 * @LastEditTime: 2022-06-04 14:56:40
 * @FilePath: \WebApp\practice\js\practice\sum3.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Array.prototype.toString = function() {
  return this.join(',');
}

function findSumTo1Array(arr) {
  let res = []
  let length = arr.length;
  if (length < 3) return res;
  arr.sort();
  for(let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length; j++) {
      let k = arr.findIndex((val, index) => {
        if (index <= j) return false;
        else return arr[i] + arr[j] + val === 0
      })

      if (k !== -1) {
        res.push([arr[i], arr[j], arr[k]])
      }
    }
  } 
  return removeRepeatEl(res);
}

function removeRepeatEl(arr) {
  let length = arr.length;
  let res = [];
  for (let i = 0; i < length; i++) {
    if (!res.some((val) => {
      return val.toString() === arr[i].toString()
    })) {
      res.push(arr[i]);
    }
  }
  return res;
}

let arr =  [-1,0,1,2,-1,-4];
console.log(findSumTo1Array(arr));