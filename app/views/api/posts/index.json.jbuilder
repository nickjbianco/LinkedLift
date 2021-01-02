json.array! @posts do |post|
    json.id post.id
    json.body post.body
    json.user post.user
end 