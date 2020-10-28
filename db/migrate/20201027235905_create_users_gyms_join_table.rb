class CreateUsersGymsJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :gyms do |t|
      t.index :user_id
      t.index :gym_id

      t.datetime :start_date
      t.datetime :end_date

      t.text :description
      t.string :title 

      t.timestamps
    end
  end
end
