Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'test', to: 'pages#test'
  get 'sandbox', to: 'pages#sandbox'
end
