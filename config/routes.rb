Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  get '/reviews', to: 'reviews#get_all'
  get '/reviews/:id/ratings', to: 'ratings#get_all'
  get '/reviews/:id/comments', to: 'comments#get_all'
  resources :users do
    resources :reviews do
      resources :ratings
      resources :comments
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
