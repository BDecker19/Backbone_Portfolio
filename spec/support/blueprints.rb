require 'machinist/active_record'

# Add your blueprints here.
#
# e.g.
#   Post.blueprint do
#     title { "Post #{sn}" }
#     body  { "Lorem ipsum..." }
#   end

User.blueprint do
	first_name {"firstName ##{i}"}
	last_name {"lastName ##{i}"}
  bio {"this is the bio of user ##{i}"}
  mission {"this is the mission of user ##{i}"}
  image_url {"uploads/someone.jpg"}
end