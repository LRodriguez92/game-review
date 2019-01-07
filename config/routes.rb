Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :ratings
  resources :comments
  get '/reviews', to: 'reviews#get_all'
  resources :users do
    resources :reviews
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
