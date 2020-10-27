class CreateGyms < ActiveRecord::Migration[6.0]
  def change
    create_table :gyms do |t|
      t.string :name
      t.text :description
      t.string :location

      t.timestamps
    end
  end
end
