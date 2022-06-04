var single = (function() {
  var unique;
  function Construct() {
    //确保只有单例
    if (Construct.unique !== undefined) {
      return Construct.unique;
    }
    //其他代码
    this.name = "anhang";
    this.age = "25";
    Construct.unique = this;
  }
  unique = new Construct();
  return unique;
})();

/**
 *
 *
 * @return {*}
 */
function User() {
  if (!(this instanceof User)) {
    return;
  }
  if (!User._instance) {
    this.name = "无名";
    User._instance = this;
  }
  return User._instance;
}

const u1 = new User();
const u2 = new User();

console.log(u1 === u2); // true
