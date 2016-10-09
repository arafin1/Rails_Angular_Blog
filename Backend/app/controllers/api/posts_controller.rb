class Api::PostsController < ApplicationController
respond_to :json
  
  def index
    post = Post.all
    render json: post
  end

  def show
  	respond_with Post.find(params[:id])
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
  	post = Post.find(params[:id])

  	if post.update(post_params)
  		render json: post , status: 200
  	else
  		render json: {errors: post.errors}, status: 422
  	end
  end

  def destroy
  	post = Post.find_by(params[:id])
  	post.destroy
  	head 204
  end
  
  private

   def post_params
   	params.require(:post).permit(:title, :description)
   end

end