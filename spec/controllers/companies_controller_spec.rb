  require "rails_helper"

  RSpec.describe CompaniesController, type: :controller do
    #Test cases to be covered:-
    #1. returns http success
    #2. when no role is provided
    #3. when filtering by role, returns only companies with the provided :role and users_count
    #4. Test cases for filters
    #5. Test cases for new, show, create, update, destroy
    #6. more 
    ## Need to work on test cases,
    context "when filtering by role" do
      before do
        3.times do 
          Company.create(:name => 'Test', :role => "supplier")
        end
        1.times do 
          Company.create(:name => 'Test', :role => "buyer")
        end

      end
      
      it "returns a success response" do
        get :index, params: { role: 'buyer' }
        expect(response).to have_http_status(:success)
      end

      it "returns only companies with the provided :role" do
        get :index, params: { role: 'buyer' }
        expect(assigns(:companies).size).to eq 1
      end
    end
  end