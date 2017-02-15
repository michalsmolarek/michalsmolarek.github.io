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

    $scope.addToCart = function (product, $index) {
        cartSrv.add(product);

        var added = document.querySelector(".added" + $index);

        added.style.opacity = "1";
    };


}]);

controllersSite.controller('siteProduct', ['$scope', '$http', '$routeParams', 'cartSrv', function ($scope, $http, $routeParams, cartSrv) {

    $http.get("model/products.json").
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

    $scope.addToCart = function (product) {
        cartSrv.add(product);

        var added = document.querySelector(".added");

        added.style.opacity = "1";

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


controllersSite.controller('cartCtrl', ['$scope', '$http', '$filter', 'cartSrv', function ($scope, $http, $filter, cartSrv) {

    $scope.cart = cartSrv.show();

    $scope.emptyCart = function () {
        cartSrv.empty();
    };

    $scope.total = function () {

        var total = 0;
        angular.forEach($scope.cart, function (item) {

            total += item.qty * item.cena;

        });
        total = $filter('number')(total, 2)
        return total;
    };

    $scope.update = function (item, $index) {
        $scope.cart.splice($index, 1);
        cartSrv.update(item);



    };

    $scope.setOrder = function ($event) {



        //TODO:ZAPISZWBAZIE

        var loggedIn = true;

        if (!loggedIn) {
            $scope.alert = {
                type: "danger",
                msg: "Aby dokonywać zakupów musisz się zalogować."
            };
            $event.preventDefault();

            return false;

        }

        $scope.alert = {
            type: "success",
            msg: "Zamówienie złożone. Trwa przekierowywanie do płatności..."

        };
        console.log($scope.total());
        console.log($scope.cart);



        $event.preventDefault();

        $('#paypalForm').submit();
        cartSrv.empty();

    };

    $scope.$watch(function () {
        cartSrv.update($scope.cart);
    })

}]);

controllersSite.controller('orders', ['$scope', '$http', function ($scope, $http) {

    $http.get("model/orders.json").
    success(function (data) {

        $scope.orders = data;

    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });



}]);

controllersSite.controller('login', ['$scope', '$http', function ($scope, $http, ) {

    //TODO: baza
    $scope.input = {};

    $scope.formSubmit = function () {
        $scope.errors = {};
        $scope.errors.login = "Błędny email lub błędne hasło.";
        console.log($scope.input);
    };

}]);

controllersSite.controller('register', ['$scope', '$http', function ($scope, $http, ) {

    //TODO: baza
    $scope.input = {};
        $scope.formSubmit = function () {
        $scope.errors = {};
            
        $scope.submit = true;
        console.log($scope.input);
    };

}]);