var xyz = angular.module("application", [])

xyz.controller("controller", function ($scope) {

    $scope.main = function () {

        if ($scope.eng > 100 || $scope.math > 100 || $scope.urdu > 100) {
            $scope.total = 0;
            $scope.percen = 0;
            $scope.grade = "Marks can't be greater than 100";
            $scope.color = "red";
        } else {
            $scope.total = $scope.eng + $scope.math + $scope.urdu;
            $scope.percen = $scope.total * 100 / 300;

            if ($scope.percen >= "80") {
                $scope.grade = "A1";
                $scope.color = "green";
            }
            else if ($scope.percen >= "70") {
                $scope.grade = "A";
                $scope.color = "blue";
            }
            else if ($scope.percen >= "60") {
                $scope.grade = "B";
                $scope.color = "orange";
            }
            else if ($scope.percen >= "50") {
                $scope.grade = "C";
                $scope.color = "pink";
            }
            else if ($scope.percen <= "40") {
                $scope.grade = "You Are Failed!";
                $scope.color = "red";
            }
        }
    }
});



