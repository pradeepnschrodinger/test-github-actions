var assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should return 2 when the array has 3 elements and search is on the last element', function () {
      assert.equal([1, 2, 3].indexOf(3), 2);
    });
  });
  describe('#length()', function () {
    it('should return 0 when array is empty', function () {
      assert.equal([].length, 0);
    });
    it('should return 2 when array has 2 elements', function () {
      assert.equal([1, 2].length, 2);
    });
  });
});
