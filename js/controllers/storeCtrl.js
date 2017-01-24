angular.module('router-app')
.controller('storeCtrl', function($scope, mainService) {

$scope.getPokes = function() {
  mainService.getPokes().then(function(response) {
    console.log('contoller', response);
    $scope.pokes = response;
  })
}






})
