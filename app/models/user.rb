class User < ApplicationRecord
  has_secure_password 

  validates :first_name, presence: true, length: { maximum: 25 }
  validates :last_name, presence: true, length: { maximum: 25 }
  validates :email, presence: true, uniqueness: true 

  has_many :employments
  has_many :gyms, through: :employments

  has_many :posts

  has_and_belongs_to_many(:connections, 
  class_name: "User",
  join_table: 'user_connections',
  foreign_key: 'user_a_id', 
  association_foreign_key: 'user_b_id'
  )

  has_and_belongs_to_many(:reversed_connections,
  class_name: "User",
  join_table: 'user_connections',
  foreign_key: 'user_b_id',
  association_foreign_key: 'user_a_id'
  )
end
