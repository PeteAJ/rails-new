Rails.application.routes.draw do
 


   namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :notes
    end
  end

 root 'application#index'
end

