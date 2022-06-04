/*
 * @Author: howlyao 741368914@qq.com
 * @Date: 2022-06-04 15:06:45
 * @LastEditors: howlyao 741368914@qq.com
 * @LastEditTime: 2022-06-04 15:25:56
 * @FilePath: \WebApp\practice\js\practice\jsonParse.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// String to Json Obj
obj = {
  name: 'myName',
  myObj: {
    name: 'mYNameObj'
  },
  children: [
    {key: 1},
    {key: 2},
  ]
}
let jsonStr = '{"name":"myName","myObj":{"name":"mYNameObj"},"children":[{"key":1},{"key":2}]}'
console.log(JSON.stringify(obj));
function jsonParse(jsonStr) {
  let obj = {};

}