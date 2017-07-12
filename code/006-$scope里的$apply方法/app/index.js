/**
 * Created by SamZhao on 2017/7/12.
 */
var myInjectorModule = angular.module("MyInjectorModule",[]);

var firstController = function($scope){
    //$scope    作用域
    //声明一个Model
    $scope.date = new Date();

    // setInterval(function () {
    //     //虽然变化 但是没有触发脏检查
    //     $scope.date = new Date();
    // }, 1000);
    // console.log($scope);

    setInterval(function () {
        $scope.$apply(function () {
            $scope.date = new Date();
            //...会去触发脏检查
        })
    }, 1000);

}

myInjectorModule.controller("firstController",firstController);
