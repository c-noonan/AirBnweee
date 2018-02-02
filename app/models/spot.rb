class Spot < ApplicationRecord
  validates :owner_id, :image_url, :lat, :long, :description, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "User"
    
end
