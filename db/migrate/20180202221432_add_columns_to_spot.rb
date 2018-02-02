class AddColumnsToSpot < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :price, :integer, null: false
    add_column :spots, :guests, :integer, null: false
    add_column :spots, :bedrooms, :integer, null: false
    add_column :spots, :bathrooms, :integer, null: false
    add_column :spots, :title, :string, null: false
  end
end
