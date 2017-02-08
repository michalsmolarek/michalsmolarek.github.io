'use strict';

var myServices = angular.module('myServices', []);

myServices.factory('cartSrv', ['store', function (store) {

    if (store.get('cart')) {
        var cart = store.get('cart');
    } else {
        var cart = [];
    }

    cart.show = function () {
        return cart;
    };

    cart.add = function (product) {

        if (!cart.length) {
            product.qty = 0;
            cart.push(product);
        }

        var addNew = true;

        angular.forEach(cart, function (value, key) {

            if (value.nazwa == product.nazwa) {
                addNew = false;
                cart[key].qty++;
            }
        });

        if (addNew) {
            product.qty = 1;
            cart.push(product);
        }

        store.set('cart', cart.show());

    };

    cart.empty = function (product) {
        store.remove('cart');
        cart.length = 0;
    };
    
    cart.update = function (newCart) {
        store.set('cart', cart.show());
    };

    return cart;
}]);