class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :comment
      t.references :posts , index: true
      t.timestamps
    end
  end
end
