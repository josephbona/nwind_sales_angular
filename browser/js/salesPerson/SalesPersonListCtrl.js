acme
  .controller('SalesPersonListCtrl', function($scope, SalesPersonService, salesPeople) {
    $scope.salesPeople = salesPeople;
    $scope.create = function(newPerson) {
      SalesPersonService.create(newPerson)
        .then(function(result) {
          $scope.salesPeople.push(result);
          $scope.name = '';
        })
        .catch(function(err) {
          console.error(err);
        });
    }
    $scope.destroy = function(salesPerson) {
      var idx = $scope.salesPeople.indexOf(salesPerson);
      SalesPersonService.destroy(salesPerson.id*1)
        .then(function() {
          $scope.salesPeople.splice(idx, 1);
        })
        .catch(function(err) {
          console.error(err);
        });
    }
  });