class Review < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :ratings
  has_many :favorites
end
