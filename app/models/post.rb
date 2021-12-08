class Post < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy

  validates :name, presence: true
  validates :introduction, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :star, presence: true

  attachment :image

  geocoded_by :name
  before_validation :geocode

  def liked_by?(user)
    likes.where(user_id: user.id).exists?
  end
  validates :star, numericality: {
    less_than_or_equal_to: 5,
    greater_than_or_equal_to: 1}, presence: true
end
