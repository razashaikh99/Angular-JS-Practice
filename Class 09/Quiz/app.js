var quiz = angular.module("myApp", []);

quiz.controller("ctrl_one", function ($scope, $timeout) {

    $scope.questions = [
        {
            id: "1",
            ques1: "Where are you from ?",
            option1: ["Karachi", "Lahore", "Islamabad"]
        },
        {
            id: "2",
            ques1: "What is your favourite Hobby ?",
            option1: ["Reading", "Coding", "Writing"]
        },
        {
            id: "3",
            ques1: "What is your favourite Cricket Player ?",
            option1: ["Babar Azam", "Shaheen Afridi", "Imad Waseem"]
        },
        {
            id: "4",
            ques1: "Which Programming Language is your favourite ?",
            option1: ["JavaScript", "Python", "PHP, Laravel"]
        },
        {
            id: "5",
            ques1: "What is your favourite Dish ?",
            option1: ["Biryani", "Karahi", "Pulao"]
        }
    ];

    $scope.timeeOut = false;
    $timeout(function () {
        $scope.timeeOut = true;
    }, 10000);

});
