  require "rails_helper"

  RSpec.describe CompaniesController, type: :controller do
    it "returns a success response" do
      get :index, params: { role: 'buyer' }
      expect(response).to have_http_status(:success)
    end
   
    context "when filtering by role" do
      before do
        3.times do 
          Company.create(:name => 'Test', :role => "supplier")
        end
        1.times do 
          Company.create(:name => 'Test', :role => "buyer")
        end

      end
      #TODO returns only companies with the provided :role
      it "returns only companies with the provided :role" do
        get :index, params: { role: 'buyer' }
        expect(assigns(:companies).size).to eq 1
      end
      #TODO returns companies without :role
      #TODO return companies with users :role
      #TODO return companies with :order, 'ASC' or 'DESC' 
      #TODO Test cases for new, show, create, update, destroy and before_filter action
      #Bug test case failing as of now
    end
  end