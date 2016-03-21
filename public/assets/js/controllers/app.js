angular.module("ys", [])
  .controller("UserController", function($scope) {
    console.log("this controller is running")
    $scope.username = "Username goes here"
    $scope.addItems = function(){
      console.log("items have been added");
      $scope.addItems.push(add)
    };
  });  



  // $scope.register = function(){
  //   var data = {
  //     firstname: $scope.firstname,
  //     lastname: $scope.lastname,
  //     email: $scope.email,
  //     password: $scope.password
  //   }
  //   console.log(data);
  //   $http({
  //     method: "POST",
  //     url: "/registerUser",
  //     data: data
  //   }).then(function(result){
  //     console.log(result);
  //   });
  // };