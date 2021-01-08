ActiveAdmin.register User do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :role, :company_id
  #
  # or
  #
  permit_params do
    permitted = [:name, :role, :company_id]
    permitted << :other if params[:action] == 'create'
    permitted
  end
  
end
