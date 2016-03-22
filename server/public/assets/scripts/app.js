var myApp = angular.module("myApp", []);

myApp.controller("SuperController", ["$scope", "$http", function($scope, $http){

  $scope.studentArray;

  $scope.loadStudents = function () {
    $http.get("/students").then( function ( response ) {
      $scope.studentArray = response.data.students;
      console.log($scope.studentArray);
    })
  };

  $scope.loadStudents();





}]);
