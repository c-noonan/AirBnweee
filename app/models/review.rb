class Review < ApplicationRecord
  validates :author_id, :body, :spot_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :spot,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: 'Spot'

end
