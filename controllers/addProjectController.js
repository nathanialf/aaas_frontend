app.controller('addProjectController', function($scope, $rootScope, $location, $http)
{
    $scope.showSuccess = false;
    $scope.showDanger = false;
    $scope.message = "";

    $scope.addProject = function(){
        var uri = aaasBackendEndpoint + "/project";
        $scope.showMsg = false;
        $http({
            url:        uri,
            method:     'POST',
            data:   {
                name:     $scope.project_name,
                code:     $scope.project_code,
                active:    1
            }
        }).then(function success(response){
            $scope.showSuccess = true;
            $scope.showDanger = false;
            $scope.message = "Added " + response.data.code + ": " + response.data.name;
            console.log($scope.message);
            console.log(response.data);
        }, function error(response){
            $scope.showSuccess = false;
            $scope.showDanger = true;
            $scope.message = "Failed to add " + $scope.project_code + ": " + $scope.project_name;
            console.log($scope.message);
            console.log(response);
        });
    }
});