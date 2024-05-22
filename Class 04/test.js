var my_Application = angular.module("my_App" , []);

my_Application.controller('my_Ctrl' , function($scope){

    $scope.images = ["img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

    $scope.product = [
        {name: "Zinger Burger", price: 599, image: "img/zinger.jpg"},
        {name: "Chicken Tikka", price: 749, image: "img/tikka.jfif"},
        {name: "Chicken Broast", price: 429, image: "img/broast.jfif"},
    ];

});





