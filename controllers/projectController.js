app.controller('projectController', function($scope, $routeParams, $rootScope, $location, $http)
{
    $scope.showDanger = false;
    $scope.message = "";
    $scope.projects;
    $scope.project;
    $scope.projectCode;

    $scope.projectCode = $routeParams["code"];

    $scope.getProjects = function(){
        var uri = aaasBackendEndpoint + "/project";
        $scope.showDanger = false;
        $http({
            url:        uri,
            method:     'GET',
        }).then(function success(response){
            $scope.projects = response.data;
            console.log(response);
        }, function error(response){
            $scope.showDanger = true;
            console.log("help");
        });
    }

    $scope.getProject = function(projectCode){
        var uri = aaasBackendEndpoint + "/project/" + projectCode;
        $scope.showDanger = false;
        $http({
            url:        uri,
            method:     'GET',
        }).then(function success(response){
            $scope.project = response.data;
            console.log(response);
        }, function error(response){
            $scope.showDanger = true;
            console.log("help");
        });
    }

    $scope.viewProject = function(projectCode) {
        window.open("#/projects?code="+projectCode, "_self");
    }
});