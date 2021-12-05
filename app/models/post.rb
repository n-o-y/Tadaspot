class Post < ApplicationRecord
  belongs_to :user, optional: true
  has_many :likes
  attachment :image

  geocoded_by :name
  before_validation :geocode

  def liked_by?(user)
    likes.where(user_id: user.id).exists?
  end
end
