app.controller('TEST-addUserController', function($scope, $rootScope, $location, $http)
{
    $scope.showMsg = false;
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
            console.log("SUCCESS");
        }, function error(response){
            $scope.showMsg = true;
            $scope.message = "Adding User Failed";
            console.log($scope.message);
        });
    }
});