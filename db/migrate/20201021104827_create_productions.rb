class CreateProductions < ActiveRecord::Migration[6.0]
  def change
    create_table :productions do |t|
      t.string :name
      t.string :mother
      t.string :size
      t.string :performance
      t.text :description

      t.timestamps
    end
  end
end
