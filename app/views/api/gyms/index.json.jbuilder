
json.array! @gyms do |gym|
    json.id gym.id
    json.name gym.name
    json.description gym.description
    json.location gym.location
end 