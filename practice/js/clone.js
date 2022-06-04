/*
 * @Author: howlyao 741368914@qq.com
 * @Date: 2022-05-12 15:30:43
 * @LastEditors: howlyao 741368914@qq.com
 * @LastEditTime: 2022-05-12 15:33:19
 * @FilePath: \WebApp\practice\js\clone.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function clone(obj) {
  if (!(typeof obj === "object")) return obj;
  if (obj instanceof Array) {
    let res = [];
    for (let i = 0; i < obj.length; i++) {
      res[i] = clone(obj[i]);
    }
    return res;
  } else if (obj instanceof Object) {
    let res = {};
    for (let prop in obj) {
      res[prop] = clone(obj[prop]);
    }
    return res;
  }
}
