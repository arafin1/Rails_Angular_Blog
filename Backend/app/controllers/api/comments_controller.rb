class Api::CommentsController < ApplicationController
respond_to :json
def index
    comment = Comment.all
    render json: comment
  end

  def show
  	respond_with Comment.find(params[:id])
  end

  def create
  	comment = Comment.new(post_params)

  	if comment.save
  		render json: comment ,status: 201
  	else 
  		render json: {errors: comment.errors}, status: 422
  	end
  end

  def update
  	comment = Comment.find(params[:id])

  	if comment.update(post_params)
  		render json: comment ,status: 200
  	else
  		render json: {errors: comment.errors}, status: 422
  	end
  end

  def destroy
  	comment = Comment.find(params[:id])
  	comment.destroy
  	head 204
  end
  
  private

   def post_params
   	params.permit(:comment,:post_id)
   end

end