class AddLinkToProductions < ActiveRecord::Migration[6.0]
  def change
    add_column :productions, :link, :string
  end
end
