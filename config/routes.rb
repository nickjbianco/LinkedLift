Rails.application.routes.draw do
  get 'gyms/index'
  root 'pages#index'
  get 'users/index'
  get 'employments/index'
  devise_for :users
  match '*path', to: 'pages#index', via: :all
end
