app.controller('TEST-addUserController', function($scope, $rootScope, $location, $http)
{
    $scope.showSuccess = false;
    $scope.showDanger = false;
    $scope.message = "";
    $scope.addUser = function(){
        var uri = aaasBackendEndpoint + "/user";
        $scope.showMsg = false;
        $http({
            url:        uri,
            method:     'POST',
            data:   {
                user_email:     $scope.user_email,
                user_fname:     $scope.user_fname,
                user_lname:     $scope.user_lname,
                user_pass:      $scope.user_pass,
                user_active:    1
            }
        }).then(function success(response){
            $scope.showSuccess = true;
            $scope.message = "Added " + response.data.user_fname + " " + response.data.user_lname;
            console.log($scope.message);
            console.log(response.data);
        }, function error(response){
            $scope.showDanger = true;
            $scope.message = "Failed to add " + $scope.user_fname + " " + $scope.user_lname;
            console.log($scope.message);
        });
    }
});