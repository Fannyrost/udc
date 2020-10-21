Rails.application.routes.draw do

  get 'productions/index'
  get '/presentation', to: 'pages#presentation', as: 'presentation'
  get '/gallery', to: 'pages#gallery', as: 'gallery'
  get '/saillie', to: 'pages#saillie', as: 'saillie'
  get '/contact', to: 'pages#contact', as: 'contact'

  resources :productions, only: [:index]

  root to: 'pages#home'
end
