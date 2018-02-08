class AddGuestsColumnToBookings < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :guests, :integer, null: false
  end
end
