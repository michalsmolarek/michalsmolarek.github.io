'use strict';

var cotnrollersAdmin = angular.module("controllersAdmin", []);





cotnrollersAdmin.controller('products', ['$scope', '$http', function ($scope, $http) {

    $http.get("model/products.json").
    success(function (data) {

        $scope.products = data;

    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });

    $scope.delete = function (product, $index) {


        $scope.products.splice($index, 1);

        console.log("usunięto: ");
        console.log(product);

    };

}]);

cotnrollersAdmin.controller('productEdit', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get("model/products.json").
    success(function (data) {

        var products = data;

        $scope.product = products[$routeParams.id];
    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });

    $scope.saveChanges = function (product) {

        $scope.product[$routeParams.id];
        console.log($scope.product);

    };

}]);


cotnrollersAdmin.controller('userEdit', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get("model/users.json").
    success(function (data) {

        var users = data;

        $scope.user = users[$routeParams.id];
    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });

    $scope.saveChanges = function (user) {

        $scope.user[$routeParams.id];
        console.log($scope.user);

    };

}]);


cotnrollersAdmin.controller('productCreate', ['$scope', '$http', function ($scope, $http) {

    $scope.createProduct = function () {

        //TO DO: POŁĄCZYĆ Z API

        console.log($scope.product);

    };

}]);

cotnrollersAdmin.controller('userCreate', ['$scope', '$http', function ($scope, $http) {

    $scope.createUser = function () {

        //TO DO: POŁĄCZYĆ Z API

        console.log($scope.user);

    };

}]);


cotnrollersAdmin.controller('users', ['$scope', '$http', function ($scope, $http) {


    $http.get("model/users.json").
    success(function (data) {

        $scope.users = data;

    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });

    $scope.delete = function (user, $index) {


        $scope.users.splice($index, 1);

        console.log("usunięto");

    };

}]);


cotnrollersAdmin.controller('orders', ['$scope', '$http', function ($scope, $http) {


    $http.get("model/orders.json").
    success(function (data) {

        $scope.orders = data;

    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });

    $scope.delete = function (order, $index) {

        $scope.orders.splice($index, 1);

        console.log("usunięto");

    };

    $scope.changeStatus = function (order) {

        if (order.status == 0) {
            order.status = 1;
            console.log(order.status);
        } else {
            order.status = 0;
            console.log(order.status);
        }

    };


}]);