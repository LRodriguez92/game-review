Rails.application.routes.draw do
  resources :favorites
  post 'user_token' => 'user_token#create'
  # get '/reviews', to: 'reviews#get_all'
  # get '/ratings', to: 'ratings#get_all'
  # get '/comments', to: 'comments#get_all'
  resources :ratings
  resources :comments
  resources :reviews
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
