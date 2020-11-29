class UserConnection < ApplicationRecord
    validates :user_a_id, presence: true
    validates :user_b_id, presence: true
end