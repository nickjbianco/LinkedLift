class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name 
      t.string :title
      t.string :location
      t.string :email
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
