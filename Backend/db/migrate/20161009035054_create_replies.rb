class CreateReplies < ActiveRecord::Migration[5.0]
  def change
    create_table :replies do |t|
      t.string :reply
      t.references :comments, index: true

      t.timestamps
    end
  end
end
