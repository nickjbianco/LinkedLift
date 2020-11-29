class CreateUserConnections < ActiveRecord::Migration[6.0]
  def change
    create_table :user_connections, :id => false do |t|
      t.integer "user_a_id", :null => false
      t.integer "user_b_id", :null => false
    end
  end
end
