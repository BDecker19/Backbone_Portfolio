require 'spec_helper'

describe UsersController do

	before do
		3.times { |i| User.make! }	 
	end

	describe "GET to index" do
		
		before do
        get :index
    end

		it "should respond with a status 200" do
        expect(response).to be_success
        expect(response.status).to eq(200)
    end

    it "should give us users in an instance variable" do
        expect(assigns(:users)).to be
        expect(assigns(:users).length).to eq(3)
        expect(assigns(:users).first.class).to eq(User)
    end

    it "should send json with all the current users" do 
    	expect(response.content_type).to eq('application/json')

    end

     it "should parse as JSON" do
      lambda { JSON.parse(response.body) }.should_not raise_error
     end

    it "should put the details of the users in the JSON" do
      usersJson = JSON.parse(response.body)
      expect(usersJson.length).to eq(3)
      expect(usersJson.first["first_name"]).to eq(User.first.first_name)
    end 

	end

	describe "GET to show" do
		
		before do
        get :show, :id => User.first.id
    end

		it "should respond with a status 200" do
        expect(response).to be_success
        expect(response.status).to eq(200)
    end

    it "should give us single user in an instance variable" do
        expect(assigns(:user)).to be
        expect(assigns(:user).class).to eq(User)
    end

    it "should send json with the user" do 
    	expect(response.content_type).to eq('application/json')
    end

     it "should parse as JSON" do
      lambda { JSON.parse(response.body) }.should_not raise_error
     end

    it "should put the details of the user in the JSON" do
      userJson = JSON.parse(response.body)
      expect(userJson["first_name"]).to eq(User.first.first_name)
    end 

	end
		

end
