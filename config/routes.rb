Rails.application.routes.draw do
  root 'pages#index'
  resources :sessions, only: [:create]
  resources :registrations, only: [:create], defaults: { format: :json }
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  get 'gyms/index' # JSON for gyms  
  get 'users/index' # JSON for users
  get '/users/:id', to: 'users#show' # JSON for one user 
  get 'employments/index' # JSON for employments 
  # get 'posts/index' # JSON for posts 
  resources :posts, only: [:index, :create], defaults: { format: :json }
  resources :users, only: [:update], defaults: { format: :json }
  resources :employments, only: [:create], defaults: { format: :json }
  match '*path', to: 'pages#index', via: :all
end
