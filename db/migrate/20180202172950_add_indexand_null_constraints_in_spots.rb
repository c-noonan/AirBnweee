class AddIndexandNullConstraintsInSpots < ActiveRecord::Migration[5.1]
  def change
    remove_column :spots, :lat
    remove_column :spots, :long
    add_column :spots, :lat, :float, null: false
    add_column :spots, :long, :float, null: false
    add_index :spots, [:lat, :long]
  end
end
