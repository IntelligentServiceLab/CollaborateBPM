var app=angular.module('myApp',[]);
app.controller('myCtrl',function ($scope,$http) {
    $scope.send=function (){
        var data={policy:$scope.policy};
        $http({
            method:'POST',
            url: 'agile-bpm-platform/test/test',
            params:{
                policy: $scope.policy
            }
        }).success(function (data,status,headers){
            $scope.result=data;
            $scope.tt=function () {
                if (data) {alert("已经获取到合作伙伴信息")}
            }
        })
    }

})