
json.array! @employments do |employment|
    json.id employment.id
    json.user_id employment.user_id
    json.title employment.title
    json.description employment.description
    json.start_date employment.start_date
    json.end_date employment.end_date
end 