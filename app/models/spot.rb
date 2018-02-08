class Spot < ApplicationRecord
  validates :owner_id, :image_url, :lat, :long, :description, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "User"

  has_many :reviews,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: 'Review'

  has_many :bookings,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: 'Booking'

  #spot.reviews
  #
  #
  # def reviews
  #   @reviews = []
  #   self.bookings.each do |booking|
  #       @reviews.push(booking.reviews)
  #   end
  #   @reviews
  # end

  has_many :reviewers, through: :reviews, source: :author
  has_many :bookers, through: :bookings, source: :user

end
