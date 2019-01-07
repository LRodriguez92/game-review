class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :rating, limit: 5
      t.references :review, foreign_key: true

      t.timestamps
    end
  end
end
