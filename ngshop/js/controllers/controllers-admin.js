'use strict';

var controllersAdmin = angular.module("controllersAdmin", ['angularFileUpload', 'myDirectives']);





controllersAdmin.controller('products', ['$scope', '$http', function ($scope, $http) {

    $http.get("model/products.json").
    success(function (data) {

        $scope.products = data;

    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });

    $scope.delete = function (product, $index) {

        if (!confirm('Czy na pewno usunąć?')) {
            return false;
        }

        $scope.products.splice($index, 1);

        console.log("usunięto: ");
        console.log(product);

    };

}]);

controllersAdmin.controller('productEdit', ['$scope', '$http', '$routeParams', 'FileUploader', function ($scope, $http, $routeParams, FileUploader) {

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

    var uploader = $scope.uploader = new FileUploader({
        url: '' // ścieżka do PHP
    });

    uploader.filters.push({
        name: 'imageFilter',
        fn: function (item /*{File|FileLikeObject}*/ , options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

    uploader.onCompleteItem = function (fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };

}]);


controllersAdmin.controller('userEdit', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get("model/users.json").
    success(function (data) {

        var users = data;

        $scope.user = users[$routeParams.id];
    }).
    error(function (status) {

        console.log("błąd pobierania danych z pliku json.");
        console.log(status);

    });

    $scope.saveChanges = function (user) {

        $scope.user[$routeParams.id];
        console.log($scope.user);

    };

}]);


controllersAdmin.controller('productCreate', ['$scope', '$http', function ($scope, $http) {

    $scope.createProduct = function () {

        //TO DO: POŁĄCZYĆ Z API

        console.log($scope.product);

    };

}]);

controllersAdmin.controller('userCreate', ['$scope', '$http', function ($scope, $http) {

    $scope.createUser = function () {

        //TO DO: POŁĄCZYĆ Z API

        console.log($scope.user);

    };

}]);


controllersAdmin.controller('users', ['$scope', '$http', function ($scope, $http) {


    $http.get("model/users.json").
    success(function (data) {

        $scope.users = data;

    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });

    $scope.delete = function (user, $index) {


        if (!confirm('Czy na pewno usunąć?')) {
            return false;
        }
        $scope.users.splice($index, 1);

        console.log("usunięto");

    };

}]);


controllersAdmin.controller('orders', ['$scope', '$http', function ($scope, $http) {


    $http.get("model/orders.json").
    success(function (data) {

        $scope.orders = data;

    }).
    error(function () {

        console.log("błąd pobierania danych z pliku json.");

    });

    $scope.delete = function (order, $index) {

        if (!confirm('Czy na pewno usunąć?')) {
            return false;
        }
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