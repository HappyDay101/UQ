class AddFieldToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :learning_style, :string
    add_column :users, :teacher, :boolean
  end
end
