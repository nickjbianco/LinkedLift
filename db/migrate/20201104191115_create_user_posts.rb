class CreateUserPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :user_posts do |t|
      t.belongs_to :user
      t.belongs_to :post

      t.datetime :post_date

      t.timestamps
    end
  end
end
