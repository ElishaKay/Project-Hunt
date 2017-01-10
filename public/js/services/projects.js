app.factory('projectFactory',function ($http) {
  var projectService = {
    projects: [],
  };

  projectService.findById = function(someId){
    for (var i = 0; i < projectService.projects.length; i++) {
      if (projectService.projects[i]._id === someId) {
        console.log(projectService.projects[i])
        return projectService.projects[i];
      }
      // else return null;
    };
   //find the project inside of projectService.projects associated with someId
    //return that project object
  }

  projectService.getAll = function () {
    return $http.get('/projects').then(function (data) {
    // this copies the response posts to the client side
    // 'projects' under 'projectService'
    angular.copy(data.data, projectService.projects);
  });
  };

  projectService.create = function (project) {
    return $http.post('/projects', project).then(function (res) {
      projectService.projects.push(res.data);
    });
  };

  projectService.delete=function (id) {
    return $http.delete('/projects/' + id)
  };

  projectService.addSubmission = function(Projectid, submissionText, project) {
    var url = "/projects/" + Projectid + "/applicantsubmission/";
    var submission = {text: submissionText};
    $http.post(url, submission).then(function (res) {
        console.log(res);  
    project.submissions.push(submission);    
    });
  };

  return projectService;
});