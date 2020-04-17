class AddDefaultPhoneToInstitute < ActiveRecord::Migration[5.2]
  def change
    change_column :institutes, :phone, :string, default: 'Não informado'
  end
end
