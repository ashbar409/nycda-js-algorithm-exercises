/*
 * Given a string, returns a new string that is the same as the original string with the order of its characters reversed.
 * You're not allowed to use String.prototype.reverse().
 * Returns the new string.
 */
function reverseString(str) {
  let letterArray = str.split('')
  
  for (let x = 0; x < Math.ceil(letterArray.length/2); x++){
    let tempLetterHold = letterArray[x]
    letterArray[x] = letterArray[letterArray.length-x-1]
    letterArray[letterArray.length-x-1] = tempLetterHold
  }

  return letterArray.join("")
}

describe('reverseString', function() {
  const assert = require("chai").assert;

  it('should work for empty string', function() {
    assert.equal(reverseString(""), "");
  });

  it('should work for single-character strings', function() {
    assert.equal(reverseString("a"), "a");
    assert.equal(reverseString(" "), " ");
    assert.equal(reverseString("*"), "*");
  });

  it('should work on non-trivial strings', function() {
    assert.equal(reverseString("cba"), "abc");
    assert.equal(reverseString("foobar"), "raboof");
    assert.equal(reverseString("otatop"), "potato");
    assert.equal(reverseString("foof"), "foof");
  });
});