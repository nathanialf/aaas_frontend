app.controller('projectController', function($scope, $rootScope, $location, $http)
{
    $scope.showDanger = false;
    $scope.message = "";
    $scope.projects;

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

    $scope.viewProject = function(projectID) {
        window.open("#/viewProject/"+projectID, "_self");
    }
});