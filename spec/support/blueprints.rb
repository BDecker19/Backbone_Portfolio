require 'machinist/active_record'

# Add your blueprints here.
#
# e.g.
#   Post.blueprint do
#     title { "Post #{sn}" }
#     body  { "Lorem ipsum..." }
#   end

User.blueprint do
	first_name {Faker::Name.first_name}
	last_name {Faker::Name.last_name}
  bio {Faker::Lorem.words(100).join(" ")}
  mission {Faker::Lorem.words(20).join(" ")}
  image_url {"uploads/someone.jpg"}
end