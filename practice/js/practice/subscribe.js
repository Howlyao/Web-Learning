/*
 * @Author: howlyao 741368914@qq.com
 * @Date: 2022-06-04 14:58:39
 * @LastEditors: howlyao 741368914@qq.com
 * @LastEditTime: 2022-06-04 15:06:18
 * @FilePath: \WebApp\practice\js\practice\subscribe.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Subsriber {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`Subsciber ${this.name}: update`)
  }

  subscribe(publisher) {
    publisher.add(this);
  }
}

class Publisher {
  constructor(name) {
    this.name = name;
    this.subsriberList = new Set()
  }

  add(subsriber) {
    this.subsriberList.add(subsriber)
  }

  publish() {
    console.log(`Publisher ${this.name} start to publish`)
    for (let subsriber of this.subsriberList) {
      subsriber.update();
    }
  }
}

console.log('start test')
let p = new Publisher('PublisherA');
let s1 = new Subsriber('s1')
let s2 = new Subsriber('s2')
s1.subscribe(p);
s2.subscribe(p);
p.publish()

console.log('end test')


