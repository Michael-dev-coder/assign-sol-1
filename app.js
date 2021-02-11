(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$injector = ['$scope'];

  function LunchCheckController($scope){
    $scope.dishes = "";
    $scope.message = "";

    $scope.checkLunch = function(){
      var words = $scope.dishes.split(",")
      if ($scope.dishes == "") {
        return $scope.message="Please enter data first";
      }else if (words >= words[3]) {
        return $scope.message="Too much";
      }else {
        return $scope.message="Enjoy!";
      };
    };

  };
})();
