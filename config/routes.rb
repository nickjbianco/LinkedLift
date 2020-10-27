Rails.application.routes.draw do
  root 'pages#index'
  devise_for :users
  match '*path', to: 'pages#index', via: :all
end
