
json.array! @user_connections do |connection|
    json.user_a_id connection.user_a_id
    json.user_b_id connection.user_b_id
end 