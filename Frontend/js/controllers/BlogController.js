myApp.controller('BlogController',['$scope','$http','$stateParams','$state',function($scope,$http,$stateParams,$state) {
    	$scope.titles = "AngularJS Blog App";

    //Show ALl Post
			$http.get('http://localhost:3000/api/posts').success(function(data){
            $scope.posts = data;
            console.log(data)
        });
   
            $scope.postForm={
                title: '',
                description: ''
            };

    	   $scope.postID = $stateParams.id;
            $http.get('http://localhost:3000/api/posts/'+ $scope.postID)
            .success(function(data){
                console.log(data);
                $scope.spost= data;
                
            });



            ////comment
            $scope.commentForm={
                comment: ''
            };

            $scope.postComment = function(commentData){
            $http.post('http://localhost:3000/api/posts/' + $scope.postID + '/comments',commentData).success(function(data){
                $scope.commentData = data;
                console.log(data);
                
                

            });
        }
/////////////


        $scope.commentId =$stateParams.comments_id;
 
            $http.get('http://localhost:3000/api/posts/'+$scope.postID+'/comments/'+$scope.commentId+'/replys').success(function(data){
                $scope.replyData = data;
            });
            
            //Reply

        
            $scope.replyForm = 
            {
                reply: ''
            };

            $scope.postReply = function(replyData){
            $http.post('http://localhost:3000/api/posts/'+ $scope.postID +'/comments/'+$scope.commentId+'/replys',replyData).success(function(data){
                $scope.replys = data;
                console.log(data);
            });
        }
       /////////////////
             $scope.addPost = function(postData){
              $http.post('http://localhost:3000/api/posts',postData).success(function(data){
                $scope.post = data;
            
            });
        }
	}
   ]);
