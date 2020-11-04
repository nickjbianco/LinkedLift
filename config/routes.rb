Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'
  get 'gyms/index' # JSON for gyms  
  get 'users/index' # JSON for users
  get '/users/:id', to: 'users#show' # JSON for one user 
  get 'employments/index' # JSON for employments 
  get 'user_posts/index' # JSON for user posts 
  match '*path', to: 'pages#index', via: :all
end
