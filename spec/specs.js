describe("Pizza", function() {

  describe("init", function() {
    it("assigns object properties size and topping", function() {
      var myPizza = Object.create(Pizza);
      myPizza.init(20, "cheese");
      expect(myPizza.size).to.equal(20);
    });
  });

  describe("numSlices", function() {
    it("determines num of slices based on size", function() {
      var myPizza = Object.create(Pizza);
      myPizza.init(16, "cheese");
      expect(myPizza.numSlices()).to.equal(8);
    });
  });

});