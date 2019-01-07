class User < ApplicationRecord
  has_secure_password
  vaildates :email, presence: true
  has_many :reviews
  has_many :comments
  has_many :ratings

  def to_token_payload
    {
      sub: id,
      email: email
    }
  end
end
