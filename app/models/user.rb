class User < ApplicationRecord
  validates :password_digest, presence: true
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :spots,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "Spot"

  has_many :reviews,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Review'

  has_many :bookings,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Booking'

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
