
json.id @user.id
json.first_name @user.first_name 
json.last_name @user.last_name 
json.title @user.title
json.location @user.location
json.email @user.email
json.employments @user.employments do |employment|
    json.id employment.id
    json.gymId employment.gym_id
    json.title employment.title
    json.startMonth employment.start_month
    json.startYear employment.start_year
    json.endMonth employment.end_month
    json.endYear employment.end_year
    json.startDate employment.start_date_representation
    json.endDate employment.end_date_representation
    json.gymName employment.gym.name 
end 

