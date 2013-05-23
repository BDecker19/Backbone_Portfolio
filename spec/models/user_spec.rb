require 'spec_helper'

describe User do

	describe "a User" do
		before do
			3.times { |i| User.make! }			 
		end

	end

end
