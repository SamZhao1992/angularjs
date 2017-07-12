/**
 * Created by SamZhao on 2017/7/12.
 */
var myInjectorModule = angular.module("MyInjectorModule",[]);

var firstController = function($scope){
    //$scope    作用域
    //声明一个Model
    $scope.name = "张三";
    $scope.count = 0;
    $scope.data = {
        name:"李四",
        count:20
    };

    //监听一个model 当一个model发生改变时 都会触发第二个函数
    $scope.$watch('name', function (newValue, oldValue) {
        ++$scope.count;
        console.log("new:" + newValue + ",old:" + oldValue);
        if($scope.count > 30){
            $scope.name = "已经大于30次了";
        }
    });

    $scope.$watch('data', function (newValue, oldValue) {
        console.log("new:" + newValue + ",old:" + oldValue);
    },true);

}

myInjectorModule.controller("firstController",firstController);
