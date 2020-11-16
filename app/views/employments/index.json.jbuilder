
json.array! @employments do |employment|
    json.id employment.id
    json.userId employment.user_id
    json.gymId employment.gym_id
    json.title employment.title
    json.description employment.description
    json.startDate employment.start_date
    json.endDate employment.end_date
    json.gymName employment.gym.name
    json.gymLocation employment.gym.location
end 