'use strict';

var controllersSite = angular.module("controllersSite", []);





controllersSite.controller('siteProducts', ['$scope', '$http', 'cartSrv', function ($scope, $http, cartSrv) {

    $http.get("model/products.json").
    success(function (data) {

        $scope.products = data;

    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });
    
    $scope.addToCart = function(product){
        cartSrv.add(product);
    };


}]);

controllersSite.controller('siteProduct', ['$scope', '$http', '$routeParams','cartSrv', function ($scope, $http, $routeParams, cartSrv) {

    $http.post("model/products.json").
    success(function (data, status) {

        var products = data;
        console.log("Pobrano dane z pliku json");
        console.log(status);
        $scope.product = products[$routeParams.id];
    }).
    error(function (status) {

        console.log("błąd pobierania danych z pliku json.");
        console.log(status);
        

    });
    
    $scope.addToCart = function(product){
        cartSrv.add(product);
    };

}]);



controllersSite.controller('siteOrders', ['$scope', '$http', function ($scope, $http) {

    $http.get("model/orders.json").
    success(function (data) {
        $scope.orders = data;
    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });

}]);


controllersSite.controller('cartCtrl', ['$scope', '$http', 'cartSrv', function ($scope, $http, cartSrv) {

    $scope.cart = cartSrv.show();
    
    $scope.emptyCart = function(){
       cartSrv.empty();
    };
    
    $scope.total = function(){
        
        var total = 0;
        angular.forEach($scope.cart, function(item){
            
            total += item.qty * item.cena;
            
        });
       return total; 
    };
    
    $scope.update = function(item, $index){
        $scope.cart.splice($index, 1);
        cartSrv.update(item);
        
    };
    
    $scope.setOrder = function($event){
        
//        $event.preventDefault();
        
    };
    
    $scope.$watch(function(){
        cartSrv.update($scope.cart);
    })

}]);











