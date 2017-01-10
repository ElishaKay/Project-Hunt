app.controller('MainCtrl', ['$scope','projectFactory', function($scope, projectFactory){
  $scope.test = "controller";

  projectFactory.getAll().then(function () {
    $scope.projectArray = projectFactory.projects;
  });

  $scope.addProject= function () {
    var project = {name: $scope.name,
      description:$scope.description,
      image:$scope.image
    }

   projectFactory.create(project);
   console.log(project)
 };

$scope.removeProject = function(index) {

  //get the specific project id
  var projectId = projectFactory.projects[index]._id;
  
  //invoke the $http delete in factory
  projectFactory.delete(projectId).then(function(response){
    //update the view
    projectFactory.getAll();
    console.log(response)
  });
 }

}]);