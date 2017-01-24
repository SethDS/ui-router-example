angular.module('router-app')
.controller('singleCtrl', function($scope, mainService, $stateParams, $state) {
console.log('state params obj:', $stateParams);

  $scope.singlePoke = $stateParams.name;

  $scope.goHome = function() {
    $state.go('home')
  }





})
