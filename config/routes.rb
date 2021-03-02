Rails.application.routes.draw do
  root 'pages#index'
  namespace :api, defaults: { format: :json } do 
    delete :logout, to: "sessions#logout"
    get :logged_in, to: "sessions#logged_in"
    get :user_search, to: "users#search"
    get 'current_user_employments/index'
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]
    resources :gyms, only: [:index]
    resources :posts, only: [:index, :create, :destroy]
    resources :users, only: [:update, :index, :show]
    resources :employments, only: [:create, :update, :destroy, :index, :show]
    resources :user_connections, only: [:create, :destroy, :index]
  end 
  match '*path', to: 'pages#index', via: :all
end
