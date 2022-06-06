/**
 * Given a string, it "camelizes" by uppercasing every character at an even index, and lowercasing every character at an odd index.
 * Returns the new string.
 */
function camelize(str) {

  let letterArray = str.split("")
  
  for (let x = 0; x < letterArray.length; x++){
    
    if(x % 2 == 0){
      letterArray[x] = letterArray[x].toUpperCase()
    } else {
      letterArray[x] = letterArray[x].toLowerCase()}

  }

  return letterArray.join("")
  
}

console.log(camelize('string for testing'))

describe('camelize', function() {
  const assert = require("chai").assert;

  it('should work on empty strings', function() {
    assert.equal(camelize(""), "");
  });

  it('should work on single characters', function() {
    assert.equal(camelize("a"), "A");
    assert.equal(camelize("q"), "Q");
    assert.equal(camelize("5"), "5");
    assert.equal(camelize(" "), " ");
  });

  it('should work for pairs', function() {
    assert.equal(camelize("fo"), "Fo");
    assert.equal(camelize("AB"), "Ab");
    assert.equal(camelize("cY"), "Cy");
    assert.equal(camelize("Xd"), "Xd");
  });

  it('should work for longer strings', function() {
    assert.equal(camelize("lol"), "LoL");
    assert.equal(camelize("potato warrior"), "PoTaTo wArRiOr");
  });
});