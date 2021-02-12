(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$injector = ['$scope'];

  function LunchCheckController($scope){
    $scope.dishes = "";
    $scope.message = "";
    $scope.Obj = {};
    $scope.Obj2 = {};

    $scope.checkLunch = function(){
      var words = $scope.dishes.split(",")
      if ($scope.dishes == "") {
        $scope.Obj = {"color":"red"};
        $scope.Obj2 = {"border": "1px solid red"};
        return $scope.message="Please enter data first";
      }else if (words.length >= 3) {
        $scope.Obj = {"color":"green"};
        $scope.Obj2 = {"border": "1px solid green"};
        return $scope.message="Too much!";
      }else {
          $scope.Obj = {"color":"green"};
          $scope.Obj2 = {"border": "1px solid green"};
        return $scope.message="Enjoy!";
      };
    };

  };
})();
