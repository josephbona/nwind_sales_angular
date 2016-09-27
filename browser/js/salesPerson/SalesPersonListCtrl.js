acme
  .controller('SalesPersonListCtrl', function($scope, SalesPersonService, salesPeople) {
    $scope.salesPeople = salesPeople;
    $scope.create = function(newPerson) {
      SalesPersonService.create(newPerson)
        .then(function(result) {
          $scope.newPerson = {};
        })
        .catch(function(err) {
          console.error(err);
        });
    };
    $scope.destroy = function(salesPerson) {
      SalesPersonService.destroy(salesPerson.id*1)
        .catch(function(err) {
          console.error(err);
        });
    };
  });
