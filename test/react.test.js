// mocha 单元测试模块
var assert = require('assert');

// 案例：Array判断测试
describe('Array', function() {
  // indexOf判断元素是否存在
  describe('#indexOf()', function() {
    it('当值不存在时，返回-1', function() {
      //比较断言：[1, 2, 3].indexOf(4) === -1 不相等抛出AssertionError，相等返回-1
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
