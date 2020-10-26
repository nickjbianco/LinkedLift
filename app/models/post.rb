class Post < ApplicationRecord
    validates :title, presence: true, length: { maximum: 50 }
    validates :description, presence: true 
end
