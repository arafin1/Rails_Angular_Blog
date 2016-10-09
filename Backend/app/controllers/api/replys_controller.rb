class Api::ReplysController < ApplicationController
respond_to :json


 def index
    reply = Reply.all
    render json: reply
  end

  def show
  	respond_with Reply.find(params[:id])

  end

  def create
  	reply = Reply.new(post_params)

  	if reply.save
  		render json: reply, status: 201
  	else 
  		render json: {errors: reply.errors}, status: 422
  	end
  end

  def update
  	reply = Reply.find(params[:id])

  	if reply.update(post_params)
  		render json: reply, status: 200
  	else
  		render json: {errors: reply.errors}, status: 422
  	end
  end

  def destroy
  	reply = Reply.find(params[:id])
  	reply.destroy
  	head 204
  end
  
  private

   def post_params
   	params.require(:reply).permit(:reply)
   end

end