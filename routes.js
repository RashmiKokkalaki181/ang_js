var app = angular.module("myShoppingList", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "index.html"
  })
  .when("/user/:id", {
    templateUrl : "userShoppingList.html"
  });

});