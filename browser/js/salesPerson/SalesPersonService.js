acme
  .factory('SalesPersonService', function($http) {
    var salesPeople = [];

    function create(salesPerson) {
      return $http.post('/api/salesPeople', salesPerson)
        .then(function(result) {
          return findAll();
        });
    }
    function destroy(salesPersonId) {
      return $http.delete('/api/salesPeople/' + salesPersonId)
        .then(function(result) {
          return findAll();
        });
    }
    function findAll() {
      return $http.get('/api/salesPeople')
        .then(function(result) {
          angular.copy(result.data, salesPeople)
          return salesPeople;
        });
    }

    return {
      create: create,
      destroy: destroy,
      findAll: findAll
    }
  })
