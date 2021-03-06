'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute'
]).config(function ($routeProvider) {

    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
    
    $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    });

    $routeProvider.otherwise({redirectTo: '/view1'});
});
