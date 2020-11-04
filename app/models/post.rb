class Post < ApplicationRecord
    validates :title, presence: true, length: { maximum: 50 }
    validates :body, presence: true

    has_many :user_posts
    has_many :users, through: :user_posts
end
