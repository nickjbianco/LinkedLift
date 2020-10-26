Rails.application.routes.draw do
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
  devise_for :users
end
