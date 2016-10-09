class Api::CommentsController < ApplicationController
respond_to :json

  def show
  	respond_with Comment.find(params[:id])
  end

  def create
  	comment = Comment.new(post_params)

  	if comment.save
  		render json: comment status: 201
  	else 
  		render json: {errors: comment.errors}, status: 422
  	end
  end

  def upate
  	comment = Comment.find(params[:id])

  	if comment.update(post_params)
  		render json: comment status: 200
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
   	params.require(:comment).permit(:comment)
   end

end