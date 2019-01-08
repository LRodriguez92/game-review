class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true
  has_many :reviews
  has_many :comments
  has_many :ratings
  has_many :favorites

  def to_token_payload
    {
      sub: id,
      name: name,
      email: email
    }
  end
end
