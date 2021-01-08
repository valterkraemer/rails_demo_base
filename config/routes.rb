# frozen_string_literal: true

Rails.application.routes.draw do
  ActiveAdmin.routes(self)

  root 'welcome#index'
  get 'companies', to: 'companies#index'
  get 'users', to: 'users#index'
  get 'users/filter_by_roles_count', to: 'users#fetch_users_count_by_roles'
  get 'companies/filter_by_roles_count', to: 'companies#fetch_companies_count_by_roles'
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
