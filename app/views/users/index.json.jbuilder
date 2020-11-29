
json.array! @users do |user|
    json.id user.id
    json.first_name user.first_name 
    json.last_name user.last_name 
    json.title user.title
    json.location user.location
    json.email user.email
    json.gyms user.gyms
    json.posts user.posts
    json.connected user.connections.include?(@current_user) || user.reversed_connections.include?(@current_user)
    json.connections user.connections
    json.reversed_connections user.reversed_connections
end 