json.array! @users do |user|
    json.id user.id
    json.first_name user.first_name 
    json.last_name user.last_name 
    json.title user.title
end 