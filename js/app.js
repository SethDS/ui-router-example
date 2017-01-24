angular.module('router-app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
  })
  .state('store', {
    url: '/store',
    templateUrl: './views/store.html',
    controller: 'storeCtrl'
  })
  .state('single', {
    url: '/single/:name',
    templateUrl: './views/single.html',
    controller: 'singleCtrl'
  })







})
