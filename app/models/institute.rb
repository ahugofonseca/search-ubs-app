# frozen_string_literal: true

# Unidade Basica de Saude - Brasil
class Institute < ApplicationRecord
  # Validations
  validates_presence_of :latitude, :longitude, :name, :address, :city, :phone
  validates_uniqueness_of :latitude, :longitude
end
