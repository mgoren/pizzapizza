var Pizza = { 
  init: function(size, topping) {
    this.size = size;
    this.topping = topping;
  },
  numSlices: function() {
    if (this.size <= 12 && this.topping == "cheese" ) { return 6; }
    else if (this.size <= 12) { return 1; }
    else if (this.size <= 16) { return 6; }
    else if (this.size <= 24) { return 8; }
    else if (this.size <= 36) { return 16; }
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

var displayImg = function(slices, topping) {
  switch(topping) {
    case "vegetable":
      $("#results figure").html("<img src='img/vegetable.png'>");
      break;
    case "cheese":
      if(slices === 6) {
        $("#results figure").html("<img src='img/cheese6.png'>");
      } else {
        $("#results figure").html("<img src='img/cheese.png'>");
      }
      break;
    case "pepperoni":
        $("#results figure").html("<img src='img/pepperoni" + slices + ".png'>");
  }
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
      if(slices === 1) {
        $("#results h5").text("We don't cut tiny " + pizza.topping + " pizzas!");
      } else {
        $("#results h5").text("We cut your " + pizza.size + " inch " + pizza.topping + " pizza into " + slices + " slices.");
      }
      displayImg(slices, pizza.topping);
      $("#results").show();
    } else {
      $("#error h5").text("How do you expect us to slice a " + pizza.size + " inch pizza?!?");
      $("#error").show();
    }

    event.preventDefault();
  });

});