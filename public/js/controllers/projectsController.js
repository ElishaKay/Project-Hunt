app.controller('ProjectsCtrl', ['$scope','$stateParams','projectFactory' , function($scope, $stateParams,projectFactory) {

  $scope.project = projectFactory.findById($stateParams.id); 
  //$scope.project = {key: 'value', key: integer, _id: integerfrommongo}

  $scope.addSubmission = function () {
  	projectFactory.addSubmission($stateParams.id, $scope.submissionText,$scope.project);
  } 
}]);