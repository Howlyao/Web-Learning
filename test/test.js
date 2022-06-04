/*
 * @Author: howlyao 741368914@qq.com
 * @Date: 2022-06-01 01:57:52
 * @LastEditors: howlyao 741368914@qq.com
 * @LastEditTime: 2022-06-01 02:00:21
 * @FilePath: \WebApp\test\test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function test() {
  this.flag = false;
  this.change = () => {
    this.flag = true;
    console.log(button.flag)
  }
}

let button = new test();
button.change();