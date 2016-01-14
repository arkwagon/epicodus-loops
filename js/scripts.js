$(document).ready(function() {
    var flavors = ["Chocolate", "Vanilla", "Mint Chip", "Pistachio"];
      flavors.forEach(function(flavor) {
        $("#ice-cream").append("I love " + flavor + "! ");
      });


});
