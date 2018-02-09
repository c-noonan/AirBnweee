class Booking < ApplicationRecord
  validates :user_id, :spot_id, :start_date, :end_date, :guests, presence: true

  validate :denied_requests

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :spot,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: 'Spot'

   def overlapping_requests
     date = Date.today
     puts date
     Booking
       .where.not(id: self.id)
       .where(spot_id: spot_id)
       .where.not('(start_date > :end_date AND :start_date > :date)
          OR (end_date < :start_date AND :end_date > :date)',
          start_date: start_date, end_date: end_date, date: date)
   end

   def denied_requests
     unless overlapping_requests.empty?
       errors[:base] << ['Booking conflicts with existing booking']
     end
   end

end
