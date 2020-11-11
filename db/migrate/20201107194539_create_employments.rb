class CreateEmployments < ActiveRecord::Migration[6.0]
  def change
    create_table :employments do |t|
      t.belongs_to :user
      t.belongs_to :gym

      t.datetime :start_date
      t.datetime :end_date

      t.text :description
      t.string :title 

      t.timestamps
    end
  end
end
