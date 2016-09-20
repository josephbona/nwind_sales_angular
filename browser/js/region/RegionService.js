acme
  .factory('RegionService', function($http) {
    var regions = [];

    function create(region) {
      return $http.post('/api/regions', region)
        .then(function(result) {
          return result.data;
        });
    }
    function destroy(regionId) {
      return $http.delete('/api/regions/' + regionId)
        .then(function(result) {
          return result.data;
        });
    }
    function findAll() {
      return $http.get('/api/regions')
        .then(function(result) {
          angular.copy(result.data, regions);
          return regions;
        });
    }

    return {
      create: create,
      destroy: destroy,
      findAll: findAll
    }
  })