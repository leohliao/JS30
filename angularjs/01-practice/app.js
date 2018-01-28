(function(){
  /* Step 01 - define our application name and link it with html  */
  var app = angular.module("store", [ ]); // store = application name,  // [] = dependencies
  /* Step 02 - define our controller */
  app.controller("StoreController", function(){
    this.product = gem;
  });

  var gem = {
    name: "Dodecahedron",
    price: 2.95,
    description: 'Your favorite',
  };

})();

