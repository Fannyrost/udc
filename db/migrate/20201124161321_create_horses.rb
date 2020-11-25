class CreateHorses < ActiveRecord::Migration[6.0]
  def change
    create_table :productions do |t|
      t.string :name
      t.string :mother
      t.string :size
      t.string :win
      t.string :short_description
      t.text :long_description
      t.string :image

      t.timestamps
    end
  end
end
