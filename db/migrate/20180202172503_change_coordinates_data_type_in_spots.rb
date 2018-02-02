class ChangeCoordinatesDataTypeInSpots < ActiveRecord::Migration[5.1]
  def change
    remove_column :spots, :lat
    remove_column :spots, :long
    add_column :spots, :lat, :float
    add_column :spots, :long, :float
  end
end
