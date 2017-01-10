var app = angular.module('projecthunt', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
  	url: '/home',
    controller: 'MainCtrl',
  	templateUrl: '../templates/home.html'
})
.state('project', {
  	url: '/projects/:id', 
    controller: 'ProjectsCtrl',
  	templateUrl: '../templates/project.html',
});

  $urlRouterProvider.otherwise('home');
}]);