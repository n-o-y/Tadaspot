class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :image_id
      t.string :name
      t.text :introduction
      t.decimal :latitude, precision: 9, scale: 6
      t.decimal :longitude, precision: 9, scale: 6
      t.integer :star
      t.datetime :created_at, default: -> { "now" }
      t.datetime :updated_at, default: -> { "now" }

      t.timestamps
    end
  end
end
