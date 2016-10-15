
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    var blogState = {
      name: 'blog',
      url: '/blog',
      controller: 'BlogController',
      templateUrl: 'views/blog.html'
    };
    var addPost = {
    	name: 'post',
    	url:'/post',
    	controller: 'BlogController',
    	templateUrl: 'views/post.html'
    };
    var detailsPost ={
        name: 'singlepost',
        url:'/posts/:id',
        controller:'BlogController',
        templateUrl: 'views/posts.html'
    }; 
   var commentsPost ={
         name: 'reply',
        url:'/posts/:id/comments/:comments_id/replys',
        controller:'BlogController',
        templateUrl: 'views/posts.html'
    }


    $stateProvider.state(blogState);
    $stateProvider.state(addPost);
    $stateProvider.state(detailsPost);
        $stateProvider.state(commentsPost);

    $urlRouterProvider.otherwise('/blog');
})  
