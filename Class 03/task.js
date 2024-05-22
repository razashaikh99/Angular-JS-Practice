var myApplication1 = angular.module("myApp1" , []);

myApplication1.controller('myCtrl_1' , function($scope){

    $scope.product = [
        {name: "Zinger Burger", category: "Burger", price: 599.99, quantity: 8, image: "img/zinger.jpg"},
        {name: "Chicken Tikka", category: "Tikka", price: 749.99, quantity: 5, image: "img/tikka.jfif"},
        {name: "Pizza Paratha", category: "Pizza", price: 939.99, quantity: 4, image: "img/pizza.jfif"},
        {name: "Chicken Roll", category: "Roll", price: 239.99, quantity: 12, image: "img/roll.jfif"},
        {name: "Chicken Broast", category: "Broast", price: 579.99, quantity: 7, image: "img/broast.jfif"},
        {name: "Malai Boti", category: "Malai-Boti", price: 449.99, quantity: 6, image: "img/boti.jfif"}
    ];

});