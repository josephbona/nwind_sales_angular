var acme = angular.module('acme', ['ui.router']);

acme
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/home.html'
      })
      .state('salesPeople', {
        url: '/salesPeople',
        templateUrl: '/js/salesPerson/salesPeople.html',
        controller: 'SalesPersonListCtrl',
        resolve: {
          salesPeople: function(SalesPersonService) {
            return SalesPersonService.findAll();
          }
        }
      })
      .state('regions', {
        url: '/regions',
        templateUrl: '/js/region/regions.html',
        controller: 'RegionsListCtrl',
        resolve: {
          regions: function(RegionService) {
            return RegionService.findAll();
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  });