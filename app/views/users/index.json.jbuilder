
json.array! @users do |user|
    json.id user.id
    json.name user.name 
    json.title user.title
    json.location user.location
    json.email user.email
    json.gyms user.gyms
    json.posts user.posts
end 