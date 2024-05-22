var gym = angular.module("gym_Web", ['ngRoute']);

gym.config(function($routeProvider){

    $routeProvider.
    when("/Trainer_Page", {
        templateUrl : "trainer.html"
    }).
    when("/Packages_Page", {
        templateUrl : "package.html"

    }).
    when("/Services_Page", {
        templateUrl : "services.html"
    }).
    otherwise({
        template : `<h1 class="m-4">Welcome to Gym Training Centre</h1>
        <ul>
            <li>Trainers</li>
            <li>Packages</li>
            <li>Services</li>
        </ul>`
    })
    
});

gym.controller("controller", function(){
    $scope.data = [
        {d1: "Access to Cardio Section", }
    ]
})




