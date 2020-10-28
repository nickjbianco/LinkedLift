class Gym < ApplicationRecord
    validates :name, presence: true, length: { maximum: 50 }
    validates :location, presence: true 
    has_and_belongs_to_many :users
end
