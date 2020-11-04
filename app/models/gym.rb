class Gym < ApplicationRecord
    validates :name, presence: true, length: { maximum: 50 }
    validates :location, presence: true 
    
    has_many :employments
    has_many :users, through: :employments
end
