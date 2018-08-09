var app = angular.module('aaas', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(false).hashPrefix('');
	
	$routeProvider.when("/newUser",{
		templateUrl: "pages/addUser.html",
		controller: "addUserController"
	}).when("/newProject",{
		templateUrl: "pages/addProject.html",
		controller: "addProjectController"
	}).otherwise({redirectTo: "/"});
});