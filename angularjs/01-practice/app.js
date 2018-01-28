(function(){
  var gems = [
    {
    name: "Dodecahedron",
    price: 2.95,
    description: 'Your favorite',
    canPurchase: false,
    soldOut: false
    },
    {
      name: "Ruby",
      price: 1.95,
      description: 'on Rails',
      canPurchase: false,
      soldOut: true
    },

  ];
  /* Step 01 - define our application name and link it with html  */
  var app = angular.module("store", [ ]); // store = application name,  // [] = dependencies
  /* Step 02 - define our controller */
  app.controller("StoreController", function(){
    this.product = gems;
  });


})();

