'use strict';

var application = angular.module("shop", ['ngRoute', 'controllersAdmin', 'controllersNavigation', 'controllersSite', 'angular-storage', 'myServices']);

application.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    // ======= PRODUCT ADMIN ========

    $routeProvider.when('/admin/products', {

        controller: 'products',
        templateUrl: 'partials/admin/products.html'

    });

    $routeProvider.when('/admin/product/edit/:id', {

        controller: 'productEdit',
        templateUrl: 'partials/admin/product-edit.html'

    });

    $routeProvider.when('/admin/product/create/', {

        controller: 'productCreate',
        templateUrl: 'partials/admin/product-create.html'

    });
    // ======= PRODUCT SITE ========

    $routeProvider.when('/products', {

        controller: 'siteProducts',
        templateUrl: 'partials/site/products.html'

    });

    $routeProvider.when('/product/:id', {

        controller: 'siteProduct',
        templateUrl: 'partials/site/product.html'

    });

    // ======= USER ADMIN========
    $routeProvider.when('/admin/users', {

        controller: 'users',
        templateUrl: 'partials/admin/users.html'

    });


    $routeProvider.when('/admin/user/edit/:id', {

        controller: 'userEdit',
        templateUrl: 'partials/admin/user-edit.html'

    });

    $routeProvider.when('/admin/user/create/', {

        controller: 'userCreate',
        templateUrl: 'partials/admin/user-create.html'

    });

    // =============== orders ADMIN ================

    $routeProvider.when('/admin/orders', {

        controller: 'orders',
        templateUrl: 'partials/admin/orders.html'

    });

    // =============== orders SITE ================

    $routeProvider.when('/orders', {

        controller: 'siteOrders',
        templateUrl: 'partials/site/orders.html'

    });

    // ==========CART ===========

    $routeProvider.when('/cart', {

        controller: 'cartCtrl',
        templateUrl: 'partials/site/cart.html'

    });

    // ============ login  and  register ============/
    $routeProvider.when('/login', {

        controller: 'login',
        templateUrl: 'partials/site/login.html'

    });

    $routeProvider.when('/register', {

        controller: 'register',
        templateUrl: 'partials/site/register.html'

    });


    // ========other ==========

    $routeProvider.otherwise({

        redirectTo: '/products'

    });




}]);