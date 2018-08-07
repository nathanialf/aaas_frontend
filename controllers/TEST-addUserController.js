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
                email:     $scope.user_email,
                fname:     $scope.user_fname,
                lname:     $scope.user_lname,
                pass:      $scope.user_pass,
                active:    1
            }
        }).then(function success(response){
            $scope.showSuccess = true;
            $scope.showDanger = false;
            $scope.message = "Added " + response.data.fname + " " + response.data.lname;
            console.log($scope.message);
            console.log(response.data);
        }, function error(response){
            $scope.showSuccess = false;
            $scope.showDanger = true;
            $scope.message = "Failed to add " + $scope.user_fname + " " + $scope.user_lname;
            console.log($scope.message);
            console.log(response);
        });
    }
});