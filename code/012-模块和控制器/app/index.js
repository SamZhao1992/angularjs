/**
 * Created by SamZhao on 2017/7/12.
 */
var myInjectorModule = angular.module("MyInjectorModule",[]);
var firstController = function($scope){
    //$scope    作用域
    //声明一个Model
    $scope.name = '张三';
    $scope.age = 21;
}
myInjectorModule.controller("firstController",firstController);