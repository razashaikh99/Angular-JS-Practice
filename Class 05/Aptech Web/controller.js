var Application = angular.module("myApp" , []);

Application.controller('myCtrl' , function($scope){

    $scope.images = ["img/slide-3.JPG" , "img/slide-2.JPG" , "img/slide-1.JPG"];

    $scope.card_image = ["img/cards.jfif"];

    $scope.course = [
        {c1: "CPISM", c2: "DISM", c3: "STC", c4: "HDSE", c5: "ADSE"}
    ];

    $scope.fees = [
        {a1: "Duration: 12 Months",     b1: "Duration: 8 Months",      c1: "Duration: 15 Months",     d1: "Duration: 16 Months",     e1: "Duration: 5 Months"},
        {a1: "Addmission Fees: 10,000", b1: "Addmission Fees: 10,000", c1: "Addmission Fees: 10,000", d1: "Addmission Fees: 10,000", e1: "Addmission Fees: 10,000"},
        {a1: "Monthly Fees: 7,500",     b1: "Monthly Fees: 7,500",     c1: "Monthly Fees: 7,500",     d1: "Monthly Fees: 7,500",     e1: "Monthly Fees: 7,500"},
        {a1: "O.V Charges: 3,500",      b1: "O.V Charges: 3,500",      c1: "O.V Charges: 3,500",      d1: "O.V Charges: 3,500",      e1: "O.V Charges: 3,500"},
        {a1: "Total Fees: 21,000",      b1: "Total Fees: 21,000",      c1: "Total Fees: 126,000",      d1: "Total Fees: 133,500",      e1: "Total Fees: 51,000"},
    ];

    
});