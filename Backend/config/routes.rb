Rails.application.routes.draw do
	namespace:api , defaults: { format: :json } do
	 resources :posts do 
	 	resources :comments do 
	 		resources :replys 
	 	end
	 end
end

	 match 'post/:id' => 'posts#show', via: [:get]
	 match 'post/:id' => 'posts#create', via: [:post]
	 match 'post/:id' => 'posts#update', via: [:get, :post]
	 match 'comment/:id' => 'comments#show', via: [:get]
	 match 'comment/:id' => 'comments#create', via: [:post]
	 match 'comment/:id' => 'comments#update', via: [:get, :post]
	 match 'reply/:id' => 'replys#show', via: [:get]
	 match 'reply/:id' => 'replys#create', via: [:post]
	 match 'reply/:id' => 'replys#update', via: [:get, :post]
end
