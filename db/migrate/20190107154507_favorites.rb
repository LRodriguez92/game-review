class Favorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites, :id => false do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false
    end
  end
end
