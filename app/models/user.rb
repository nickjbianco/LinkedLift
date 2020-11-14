class User < ApplicationRecord
  has_secure_password 

  validates :first_name, presence: true, length: { maximum: 25 }
  validates :last_name, presence: true, length: { maximum: 25 }
  validates :title, presence: true
  validates :email, presence: true, uniqueness: true 

  has_many :employments
  has_many :gyms, through: :employments

  has_many :posts
end
