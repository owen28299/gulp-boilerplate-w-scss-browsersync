var fs = require('fs');
var vm = require('vm');
var chai = require('chai');
var functionsFile = fs.readFileSync(process.cwd() + '/public/js/app.js');
vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL

var expect = chai.expect;
var should = chai.should();

describe('Function exists', function() {
  it("should work", function(){
    expect(1).to.equal(1);
  });

  it('should have function 1', function(){
    expect(test1()).to.equal(5);
  });

});