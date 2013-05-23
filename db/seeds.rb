# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

5.times do |i|
  User.create(first_name: "firstName ##{i}", 
  						last_name: "lastName ##{i}",
  						bio: "this is the bio of user ##{i}",
  						mission: "this is the mission of user ##{i}",
  						image_url: "uploads/someone.jpg")
end