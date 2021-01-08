class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :role
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
