class Review < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :ratings, dependent: :destroy
  has_many :favorites, dependent: :destroy 
end
