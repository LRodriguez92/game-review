class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true
  has_many :reviews, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :ratings, dependent: :destroy
  has_many :favorites, dependent: :destroy 

  def to_token_payload
    {
      sub: id,
      name: name,
      email: email
    }
  end
end
