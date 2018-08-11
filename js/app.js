var app = angular.module('aaas', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(false).hashPrefix('');
	
	$routeProvider.when("/newUser",{
		templateUrl: "pages/addUser.html",
		controller: "addUserController"
	}).when("/newProject",{
		templateUrl: "pages/addProject.html",
		controller: "addProjectController"
	}).when("/users",{
		templateUrl: "pages/user.html",
		controller: "userController"
	}).when("/projects",{
		templateUrl: "pages/project.html",
		controller: "projectController"
	}).otherwise({redirectTo: "/"});
});