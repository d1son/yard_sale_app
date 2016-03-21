angular.module("ys", [])
  .controller("ysController", function($http, $scope) {
    $scope.register = function(){
      var data = {
        firstname: $scope.firstname,
        lastname: $scope.lastname,
        email: $scope.email,
        password: $scope.password
      }
      console.log(data);
      $http({
        method: "POST",
        url: "/registerUser",
        data: data
      }).then(function(result){
        //console.log(result);
      });
    };
  });  