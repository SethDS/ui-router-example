angular.module('router-app')
.service('mainService', function($http, $q) {

this.getPokes = function() {
  return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/'
  }).then(function(response) {
    console.log('service:', response);
    return response.data.results;
  })
}




})
