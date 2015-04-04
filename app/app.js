// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'StartupCtrl',
  'ScienceCtrl',
  'PoliticsCtrl',
  'BusinessCtrl',
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('startup', {
      url: "/startup",
      templateUrl: "partials/StartupCommentGenerator.html",
      controller: "StartupController"
    })
    .state('science', {
      url: "/science",
      templateUrl: "partials/ScienceCommentGenerator.html",
      controller: 'ScienceController'
    })
    .state('politics', {
      url: "/politics",
      templateUrl: "partials/PoliticsCommentGenerator.html",
      controller: 'PoliticsController'
    })
    .state('business', {
      url: "/business",
      templateUrl: "partials/BusinessBookCommentGenerator.html",
      controller: 'BusinessController'
    });
}]);
