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
  }
}



$(document).ready(function() {
  $("#form-pizza").submit(function(event) {
    var inputtedSize = parseInt($("#input-size").val());
    var inputtedTopping = $("#input-topping").val();
    var pizza = Object.create(Pizza);
    pizza.init(inputtedSize, inputtedTopping);
    var slices = pizza.numSlices();

    $("#results h5").text("We will cut your " + pizza.size + " inch " + pizza.topping + " pizza into " + slices + " slices.");

    event.preventDefault();
  });
});