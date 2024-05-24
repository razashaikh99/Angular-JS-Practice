var zakat = angular.module("myApp", [])

zakat.controller("ctrl_one", function($scope){

    $scope.zakat = function(){
        if($scope.gold >= 7){
            $scope.goldPrice = $scope.gold * 240500;
            $scope.goldZakat = $scope.goldPrice / 2.5;
        }
        else{
            $scope.goldPrice = 0;
        }
        
        if($scope.silver >= 52.5){
            $scope.silverPrice = $scope.silver * 3270;
            $scope.silverZakat = $scope.silverPrice / 2.5;

        }
        else{
            $scope.silverPrice = 0;
        }

        if($scope.assets >= 171675){
            $scope.assetsZakat = $scope.assets / 2.5;
        }
        else{
            $scope.assetsZakat = 0;
        }

        $scope.totalZakat = $scope.goldZakat + $scope.silverZakat + $scope.assetsZakat
    }

})