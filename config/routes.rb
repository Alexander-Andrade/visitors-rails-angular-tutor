Rails.application.routes.draw do
  root to: 'visitors#index'

  resources :visitors, only: [:index, :create, :destroy], defaults: {format: :json}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
