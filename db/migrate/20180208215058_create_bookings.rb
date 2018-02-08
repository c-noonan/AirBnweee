class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :spot_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end

    add_index :bookings, :user_id
    add_index :bookings, :spot_id
  end
end
