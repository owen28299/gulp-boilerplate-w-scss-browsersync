describe('Function exists', function() {
  it("should work", function(){
    expect(1).to.equal(1);
  });

  it('should have function 1', function(){
    expect(test1()).to.equal(5);
  });

});