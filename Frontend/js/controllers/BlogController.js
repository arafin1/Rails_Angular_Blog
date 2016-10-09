
	myApp.controller('BlogController',['$scope','$http',function($scope,$http) {
    	
    	$scope.titles = "AngularJS Blog App";
    	$scope.posts ={
            title: '',
            description: ''
        };


    	$scope.get =function(){
			$http.get('http://localhost:3000/api/posts').success(function(data){
			$scope.posts = data;
			console.log(data)
		});
    	}
    	
            $scope.postForm={
                title: '',
                description: ''
            };
            $scope.post ={};
        
    	$scope.addPost = function(postData){
    		$http.post('http://localhost:3000/api/posts',postData).success(function(data){
    		$scope.post = data;
    		});
    	}
        $scope.comment ={};
        $scope.getComment = function(postComment){
            $http.get('http://localhost:3000/api/posts/post_id/comments',postComment).success(function(data){
                $scope.comment = data;
            });
        }
        $scope.reply ={};
        $scope.getreply = function(postReply){
            $http.get('http://localhost:3000/api/posts/:post_id/comments/:comment_id/replys',postReply).success(function(data){
                $scope.comment = data;
            });
        }
	}
   ]);
