acme
  .controller('CompanyStatusCtrl', function($scope, SalesPersonService, RegionService, $q) {
    $q.all([
      SalesPersonService.findAll(),
      RegionService.findAll()
    ])
    .then(function(result) {
      $scope.salesPeople = result[0];
      $scope.regions = result[1];
    })
    .catch(function(err) {
      console.error(err);
    });
  });
