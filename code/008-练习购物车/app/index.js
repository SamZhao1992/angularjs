/**
 * Created by SamZhao on 2017/7/12.
 */
var myInjectorModule = angular.module("MyInjectorModule", []);

var CartController = function ($scope) {
    //$scope    作用域
    //声明一个Model
    $scope.cart = [
        {
            id: 1000,
            name: 'iPhone5',
            quantity: 11,
            price: 3300
        },
        {
            id: 1001,
            name: 'iPhone5s',
            quantity: 22,
            price: 4300
        },
        {
            id: 1001,
            name: 'iPhone6',
            quantity: 33,
            price: 5300
        },
        {
            id: 1003,
            name: 'iPhone6s',
            quantity: 44,
            price: 6300
        },
        {
            id: 1004,
            name: 'iPhone7',
            quantity: 55,
            price: 7300
        }
    ];

    /**
     * 计算总价
     */
    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += item.quantity * item.price;
        });
        return total;
    }

    /**
     * 计算总数量
     */
    $scope.totalCount = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += item.quantity;
        });
        return total;
    }

     $scope.remove = function (id) {
        alert(i)
     }

}

myInjectorModule.controller("CartController", CartController);
