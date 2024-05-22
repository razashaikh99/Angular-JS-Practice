var Application = angular.module("myApp" , []);

Application.controller('myCtrl' , function($scope){

    $scope.images = ["img/slide-3.JPG" , "img/slide-2.JPG" , "img/slide-1.JPG"];

    $scope.card_image = ["img/cards.jfif"];

    $scope.course = [
        {c1: "CPISM", c2: "DISM", c3: "STC", c4: "HDSE", c5: "ADSE"}
    ];

    $scope.fees = [
        {d1: "Duration: 12 Months", d2: "Addmission Fees: 10,000", d3: "Monthly Fees: 7,500", d4: "O.V Charges: 3500"},
    ];

    
});