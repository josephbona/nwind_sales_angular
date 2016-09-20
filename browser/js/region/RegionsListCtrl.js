acme
  .controller('RegionsListCtrl', function($scope, RegionService, regions) {
    $scope.regions = regions;
    $scope.create = function() {
      RegionService.create({ zipcode: $scope.zipcode })
        .then(function(result) {
          $scope.regions.push(result);
          $scope.zipcode = '';
        })
        .catch(function(err) {
          console.error(err);
        });
    }
    $scope.destroy = function(region) {
      var idx = $scope.regions.indexOf(region);
      RegionService.destroy(region.id*1)
        .then(function() {
          $scope.regions.splice(idx, 1);
        })
        .catch(function(err) {
          console.error(err);
        });
    }
  });