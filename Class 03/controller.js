var myApplication = angular.module("myApp" , []);

myApplication.controller('myCtrl' , function($scope){

    $scope.countries = ["Pakistan", "Iraq", "Malaysia", "Bangladesh", "Qatar", "Indonesia", "UAE", "India", "China", "Afghanistan"];

    $scope.product = {
        p_Id : 21376,
        p_Name : "Zinger Burger",
        p_Price : 499,
        p_Quantity : 16,
        p_Description : "This is a Mashoor Zinger Burger",
    };

})