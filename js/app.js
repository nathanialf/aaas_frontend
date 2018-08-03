var app = angular.module('aaas', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(false).hashPrefix('');
	
	$routeProvider.when("/useradd",{
		templateUrl: "pages/TEST-addUser.html",
		controller: "TEST-addUserController"
	}).otherwise({redirectTo: "/"});
});