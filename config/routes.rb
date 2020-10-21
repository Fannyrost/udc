Rails.application.routes.draw do


  get '/presentation', to: 'pages#presentation', as: 'presentation'
  get '/gallery', to: 'pages#gallery', as: 'gallery'
  get '/saillie', to: 'pages#saillie', as: 'saillie'
  get '/contact', to: 'pages#contact', as: 'contact'
  get '/production', to: 'productions#index', as: 'production'


  root to: 'pages#home'
end
