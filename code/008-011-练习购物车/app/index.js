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
            total += parseInt(item.quantity);
        });
        return total;
    }

     $scope.remove = function (id) {
        // alert(id);
        var index = findIndex(id);

        if(index != -1){
            $scope.cart.splice(index, 1);
        }
     }

    /**
     * 增加购物数量
     * @param id
     */
    $scope.add = function (id) {
        var index = findIndex(id);

        if(index != -1){
            ++$scope.cart[index].quantity;
        }
    }

    /**
     * 减少购物数量
     * @param id
     */
    $scope.reduce = function (id) {
        var index = findIndex(id);

        if(index != -1){
            var item = $scope.cart[index];
            if(item.quantity > 1){
                --item.quantity;
            }else{
                var returnKey = confirm("是否从购物车中删除该商品？");
                if(returnKey){
                    $scope.remove(item.id);
                }
            }
        }
    }

    /**
     * 查找一个元素索引
     * @param id
     * @returns {number}
     */
    var findIndex = function (id) {
        var index = -1;
        angular.forEach($scope.cart, function (item, key) {
            if(item.id == id){
                index = key;
            }
        });
        return index;
    }

    /**
     * 监听整个cart做到输入校验
     */
    $scope.$watch('cart', function (newVal, oldVal) {
        angular.forEach(newVal, function (item, key) {
            if(item.quantity < 1){
                var returnKey = confirm("是否从购物车中删除该商品？");
                if(returnKey){
                    $scope.remove(key);
                }else{
                    item.quantity = oldVal[key].quantity;
                }
                return ;
            }
        })
    }, true);
}

myInjectorModule.controller("CartController", CartController);
