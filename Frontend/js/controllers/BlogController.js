
	myApp.controller('BlogController',['$scope','$http',function($scope,$http) {
    	
    	$scope.titles = "AngularJS Blog App";
    
      
    //Adding Post
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
            
        
    	$scope.addPost = function(postData){
    		$http.post('http://localhost:3000/api/posts',postData).success(function(data){
    		$scope.post = data;
    		});
    	}

        //Adding Comment

        $scope.getComment =function(){
            $http.get('http://localhost:3000/api/posts/:post_id/comments/').success(function(data){
            $scope.comments = data;
            console.log(data)
        });
        }

        $scope.commentForm ={
            comment: '',
            post_id: ''
            
        };
        

        $scope.postComment = function(postComment){
            $http.post('http://localhost:3000/api/posts/' + $scope.commentForm.post_id + '/comments',postComment).success(function(data){
                $scope.commentData = data;
                console.log(data);
            });
        }



        //Adding Reply
       
        $scope.getreply = function(){
            $http.get('http://localhost:3000/api/posts/:post_id/comments/:comment_id/replys').success(function(data){
                $scope.reply = data;
            });
        }

        $scope.replyData ={
            reply: '',
            comment_id: '',
            post_id: ''
        };

            $scope.postReply = function(postR){
            $http.post('http://localhost:3000/api/posts/'+ $scope.replyData.post_id +'/comments/'+$scope.replyData.comment_id+'/replys',postR).success(function(data){
                $scope.replys = data;
                console.log(data);
            });
        }


	}
   ]);
