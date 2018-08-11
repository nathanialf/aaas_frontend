app.controller('userController', function($scope, $rootScope, $location, $http)
{
    $scope.showDanger = false;
    $scope.message = "";
    $scope.users;

    $scope.getUsers = function(){
        var uri = aaasBackendEndpoint + "/user";
        $scope.showDanger = false;
        $http({
            url:        uri,
            method:     'GET',
        }).then(function success(response){
            $scope.users = response.data;
        }, function error(response){
            $scope.showDanger = true;
            console.log("help");
        });
    }
});