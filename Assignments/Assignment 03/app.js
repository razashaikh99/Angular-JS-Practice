var my_Application = angular.module("my_App" , []);

my_Application.controller('my_Ctrl' , function($scope){

    $scope.category = ["Name", "Department", "Designation", "Salary", "Gender", "Age"];

    $scope.emp_data = [
        {name: "John Doe", depart: "IT", designa: "Software Engineer", salary: "50,000", gender: "Male", age: "30"},
        {name: "Jane Smith", depart: "HR", designa: "HR Manager", salary: "61,000", gender: "female", age: "27"},
        {name: "Michael Johnson", depart: "Finance", designa: "Financial Analyst", salary: "47,000", gender: "Male", age: "28"},
        {name: "Sarah Williams", depart: "Marketing", designa: "Marketing Specialist", salary: "52,000", gender: "Female", age: "32"},
        {name: "David Brown", depart: "Operations", designa: "Operations Manager", salary: "62,000", gender: "Male", age: "40"},
        {name: "Emily Davis", depart: "IT", designa: "System Analyst", salary: "44,000", gender: "Female", age: "34"},
        {name: "Robert Wilson", depart: "Finance", designa: "Accountant", salary: "56,000", gender: "Male", age: "31"}
    ];

});


