# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

5.times do |i|
  User.create(first_name: "#{i}#{Faker::Name.first_name}", 
  						last_name: "#{i}#{Faker::Name.last_name}",
  						bio: "#{i}#{Faker::Lorem.words(100).join(" ")}",
  						mission: "#{i}#{Faker::Lorem.words(20).join(" ")}",
  						image_url: "uploads/someone.jpg")
end

