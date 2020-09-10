var app = angular.module("myShoppingList",  [ngRoute]); 
// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//       templateUrl : "index.html"
//     })
//     .when("/user/:id", {
//       templateUrl : "userShoppingList.html"
//     });
  
//   });
app.controller('myCtrl', ['$scope', function($scope) {
    
    $scope.products = [{
        id : 1,name : 'rashmi'},
    {id: 2, name: 'kavya'},
    {id: 3, name: 'Ruby'}
]

    
    }]);


app.controller('myShoppingCtrl', ['$scope', function($scope) {

    $scope.checkPattern = function(addMe){
        var regx= /([a-z])/;
         return regx.test(addMe);

    }

    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
     if(!$scope.checkPattern($scope.addMe)){
         return $scope.errortext =" Must be alphabets";
     }
        for(let i=0; i<$scope.products.length ; i++)
        {
            // $scope.products[i]=$scope.products[i].toLowerCase();
            if ($scope.products[i].toLowerCase() == $scope.addMe.toLowerCase()){
                
         return   $scope.errortext = "The item is already in your shopping list.";
            }
        }
        $scope.products.push($scope.addMe);
        console.log($scope.products)
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }


}]);
