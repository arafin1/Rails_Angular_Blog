
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    var blogState = {
      name: 'blog',
      url: '/blog',
      controller: 'BlogController',
      templateUrl: 'views/blog.html'
    };

    

    $stateProvider.state(blogState);
    $urlRouterProvider.otherwise('/blog');
})  
