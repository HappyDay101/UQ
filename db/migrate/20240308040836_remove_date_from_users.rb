class RemoveDateFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :date, :date
  end
end
