class Post < ApplicationRecord
    validates :body, presence: true

    belongs_to :user
    # has_many :user_posts
    # has_many :users, through: :user_posts
end
