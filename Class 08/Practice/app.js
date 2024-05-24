var abc = angular.module("myApp" , []);

abc.controller("ctrl_one" , function($scope , $location){
    $scope.getLocation = function(){
        $scope.locations = $location.absUrl();
    }
});

abc.controller("ctrl_two" , function($scope , $timeout){
    $scope.message = "Message Before Timeout";
    $timeout(function(){
        $scope.message = "Hogaya bhai change hogaya";
    } , 4000);
});

abc.controller("ctrl_three" , function($scope , $interval){
    $scope.myTime = new Date().toLocaleTimeString();

    $interval(function(){
        $scope.myTime = new Date().toLocaleTimeString();
    }, 1000);
})






