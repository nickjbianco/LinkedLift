
json.array! @employments do |employment|
    json.id employment.id
    json.userId employment.user_id
    json.gymId employment.gym_id
    json.title employment.title
    json.description employment.description
    json.startDate employment.start_date_representation
    json.endDate employment.end_date_representation
    json.startMonth employment.start_month
    json.startYear employment.start_year
    json.endMonth employment.end_month
    json.endYear employment.end_year 
    json.gymName employment.gym.name
    json.gymLocation employment.gym.location
end 