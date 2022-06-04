import _ from 'lodash';
import printMe from './print.js'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const input = document.createElement('input');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  input.type = 'text';
  element.append(input);

  return element;
}

document.body.appendChild(component());