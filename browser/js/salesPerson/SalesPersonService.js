acme
  .factory('SalesPersonService', function($http) {

    function create(salesPerson) {
      return $http.post('/api/salesPeople', salesPerson)
        .then(function(result) {
          return result.data;
        });
    }
    function destroy(salesPersonId) {
      return $http.delete('/api/salesPeople/' + salesPersonId)
        .then(function(result) {
          return result.data;
        });
    }
    function findAll() {
      return $http.get('/api/salesPeople')
        .then(function(result) {
          return result.data;
        });
    }

    return {
      create: create,
      destroy: destroy,
      findAll: findAll
    }
  })