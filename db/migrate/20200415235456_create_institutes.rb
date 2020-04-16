class CreateInstitutes < ActiveRecord::Migration[5.2]
  def change
    create_table :institutes do |t|
      t.decimal :latitude
      t.decimal :longitude
      t.string :name
      t.string :address
      t.string :neighborhood
      t.string :city
      t.string :phone

      t.timestamps
    end
  end
end
