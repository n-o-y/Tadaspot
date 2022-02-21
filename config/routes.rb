Rails.application.routes.draw do
  root to: 'homes#top'
  devise_for :users
  resource :users, only: [:show, :edit, :update] do
    collection do
      get 'unsubscribe'
      patch 'withdraw'
    end
  end

  resources :posts do
    resource :likes, only: [:create, :destroy]
  end

end