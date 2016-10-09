Rails.application.routes.draw do
	namespace:api , defaults: { format: :json } do
	 resources :posts
end

	 match 'post/:id' => 'posts#show', via: [:get]
	 match 'post/:id' => 'posts#create', via: [:post]
	 match 'post/:id' => 'posts#show', via: [:get, :post]
end
