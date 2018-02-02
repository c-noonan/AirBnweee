class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.integer :owner_id, null: false
      t.string :image_url, null: false
      t.integer :lat, null: false
      t.integer :long, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :spots, :owner_id
    add_index :spots, [:lat, :long], unique: true
  end
end
