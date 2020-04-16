Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :find_ubs, only: :index
    end
  end
end
