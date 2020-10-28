class Employment < ApplicationRecord
    validates :start_date, presence: true 
    validates :title, presence: true 
    belongs_to :user
    belongs_to :gym 
end