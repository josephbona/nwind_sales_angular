acme
  .controller('RegionsListCtrl', function($scope, RegionService, regions) {
    $scope.regions = regions;
    $scope.create = function(newRegion) {
      RegionService.create(newRegion)
        .then(function(result) {
          $scope.regions.push(result);
          $scope.newRegion.zipcode = '';
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