var Pizza = { 
  init: function(size, topping) {
    this.size = size;
    this.topping = topping;
  },
  numSlices: function() {
    if (this.size < 21 && this.topping == "cheese" ) { return 8; }
    else if (this.size < 21) { return 6; }
    else if (this.size < 36) { return 12; }
    else { return 24; }
  },
  legit: function() {
    if (this.size < 4 || this.size > 60) { return false; }
    return true;
  }
}

var cleanPage = function() {
  $("#input-size").val("");
  $("#input-topping").val("");
  $("#results").hide();
  $("#error").hide();
}


$(document).ready(function() {
  $("#form-pizza").submit(function(event) {
    var inputtedSize = parseInt($("#input-size").val());
    var inputtedTopping = $("#input-topping").val();
    cleanPage();
    var pizza = Object.create(Pizza);
    pizza.init(inputtedSize, inputtedTopping);
    if (pizza.legit()) {
      var slices = pizza.numSlices();
      $("#results h5").text("We will cut your " + pizza.size + " inch " + pizza.topping + " pizza into " + slices + " slices.");
      $("#results").show();
    } else {
      $("#error h5").text("How do you expect us to slice a " + pizza.size + " inch pizza?!?");
      $("#error").show();
    }

    event.preventDefault();
  });

});