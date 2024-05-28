var zakat = angular.module("myApp", [])

zakat.controller("ctrl_time" , function($scope , $interval){
    $scope.myTime = new Date().toLocaleTimeString();

    $interval(function(){
        $scope.myTime = new Date().toLocaleTimeString();
    }, 100);
});

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

});

zakat.controller("timeOut" , function($scope , $timeout){
        $scope.message = "Gold Rate";
        $timeout(function(){
            $scope.message = "Today Gold Rate is 240,500";
        } , 5000);
        $scope.message2 = "Silver Rate";
        $timeout(function(){
            $scope.message2 = "Today Gold Rate is 3,270";
        } , 5000);
});

