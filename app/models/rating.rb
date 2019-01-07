class Rating < ApplicationRecord
  belongs_to :review
  has_many :users
end
