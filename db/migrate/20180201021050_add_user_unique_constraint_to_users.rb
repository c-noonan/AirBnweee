class AddUserUniqueConstraintToUsers < ActiveRecord::Migration[5.1]
  def change
    remove_index :users, :username
    add_index :users, :username, unique: true
  end
end
