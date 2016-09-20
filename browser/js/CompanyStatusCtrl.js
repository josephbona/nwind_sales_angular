acme
  .controller('CompanyStatusCtrl', function($scope, SalesPersonService, RegionService) {
    // $scope.salesPeople = salesPeople;
    // $scope.regions = regions;
    SalesPersonService.findAll()
      .then(function(result) {
        $scope.salesPeople = result;
      })
      .catch(function(err) {
        console.error(err);
      });
    RegionService.findAll()
      .then(function(result) {
        $scope.regions = result;
      })
      .catch(function(err) {
        console.error(err);
      });
  });