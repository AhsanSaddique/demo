'use strict';

angular.module('myApp')
.controller('View1Ctrl', function($scope,$http) {




  $http.get('http://52.77.56.77:9090/api/v1/city').
  success(function(data) {
    $scope.cities = data;
      $scope.modal1=cities;
    console.log(data);
  });




  $http.get('http://52.77.56.77:9090/api/v1/specialty').
  success(function(data) {
    $scope.specialty = data;
      $scope.modal2=specialty;
      console.log(data);
  });


  $scope.today = new Date();

     



      $http.get('http://52.77.56.77:9090/api/v2/doctor?date=2016-06-28&location=Islamabad').
      success(function(data) {
        $scope.doctor = data;
        console.log(data);
      });


});


if($scope.modal1==$scope.doctor.cities && $scope.modal2==$scope.doctor.specialty)
{
    $scope.modal =doctor;
}
/*

$(document).ready(function () {
  if(window.location.href.indexOf("Lahore") > -1)
  {
    alert("your url contains the name franky");
  }
});*/



myApp.config(function($routeProvider) {
  $routeProvider
      .when("search", {
        templateUrl : "view2.html"
      })
});
