Rails.application.routes.draw do
  get 'current_user_employments/index'
  root 'pages#index'
  resources :sessions, only: [:create]
  resources :registrations, only: [:create], defaults: { format: :json }
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  get 'gyms/index' # JSON for gyms  
  get 'users/index' # JSON for users
  get 'employments/index' # JSON for employments
  get '/users/:id', to: 'users#show' # JSON for one user 
  get 'employments/:id', to: 'employments#show' # JSON for one employment
  get 'employments/index' # JSON for employments 
  get 'posts/index' # JSON for posts 
  resources :posts, only: [:index, :create, :destroy], defaults: { format: :json }
  resources :users, only: [:update], defaults: { format: :json }
  resources :employments, only: [:create, :update, :destroy], defaults: { format: :json }
  match '*path', to: 'pages#index', via: :all
end
