class Api::PostsController < ApplicationController
before_action :set_post, only: [:show,:update,:destroy]
  
  def index
    post = Post.all
    render json: post
  end

  def show
  comments = @post.comments
  replies =[]
  comments.each {|cmt| replies << cmt.replies}
    render json: { post: @post, comments: comments, replies: replies}

  end

  def create
  	post = Post.new(post_params)

  	if post.save
  		render json: post, status: 201
  	else 
  		render json: {errors: post.errors}, status: 422
  	end
  end

  def update
  	@post

  	if @post.update(post_params)
  		render json: post , status: 200
  	else
  		render json: {errors: post.errors}, status: 422
  	end
  end

  def destroy
  	@post
  	post.destroy
  	head 204
  end
  
  

  private

  def set_post
      @post = Post.find(params[:id])
    end

   def post_params
   	params.require(:post).permit(:title, :description)
   end

end