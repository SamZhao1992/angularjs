/**
 * Created by SamZhao on 2017/7/12.
 */
var myInjectorModule = angular.module("MyInjectorModule",[],function ($provide) {
    //自定义服务
    $provide.provider('CustomService', function () {
        this.$get = function () {
            return{
                message:'CustomService Message'
            }
        }
    });

    $provide.provider('CustomService1', function () {
        this.$get = function () {
            return{
                message:'CustomService1 Message'
            }
        }
    });
});

myInjectorModule.controller("firstController",function ($scope, CustomService, CustomService1) {
    $scope.name = '张三';
    console.log(CustomService);
    console.log(CustomService1);
});