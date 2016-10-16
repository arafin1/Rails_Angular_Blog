Rails.application.routes.draw do
	namespace:api , defaults: { format: :json } do
	 resources :posts do 
	 	resources :comments do 
	 		resources :replies
	 	end
	 end
end

	
end
