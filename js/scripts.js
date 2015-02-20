var Pizza = { 
  init: function(size, topping) {
    this.size = size;
    this.topping = topping;
  },
  numSlices: function() {
    if (this.size < 22 ) { return 8; }
    else if (this.size < 36) { return 12; }
    else { return 24; }
  }
}



$(document).ready(function() {

});