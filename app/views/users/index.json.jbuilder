json.userInfo @users do |user|
    json.name user.name 
    json.title user.title
    json.location user.location
    json.email user.email
end 
