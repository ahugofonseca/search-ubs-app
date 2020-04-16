# frozen_string_literal: true

# Unidade Basica de Saude - Brasil
class Institute < ApplicationRecord
  # Validations
  validates_presence_of :latitude, :longitude, :name, :address, :city, :phone
  validates_uniqueness_of :latitude, :longitude

  # Alias and Delegators
  alias_attribute :lat, :latitude
  alias_attribute :long, :longitude

  # Methods
  def geocode
    slice(:lat, :long)
  end

  def self.default_presenter(pagination, data)
    {
      current_page: pagination.from,
      per_page: pagination.items,
      total_entries: pagination.count,
      entries: InstituteSerializer.new(data)
                                  .serializable_hash[:data]
                                  .map { |ubs| ubs[:attributes] }
    }
  end
end
