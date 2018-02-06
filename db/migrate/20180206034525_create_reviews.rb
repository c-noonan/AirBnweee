class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.integer :spot_id, null: false
      t.integer :rating

      t.timestamps
    end

    add_index :reviews, :author_id
    add_index :reviews, :spot_id
  end
end
