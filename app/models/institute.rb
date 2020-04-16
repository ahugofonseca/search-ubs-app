# frozen_string_literal: true

# Unidade Basica de Saude - Brasil
class Institute < ApplicationRecord
  reverse_geocoded_by :latitude, :longitude

  # Validations
  validates_presence_of :latitude, :longitude, :name, :address, :city, :phone
  validates_uniqueness_of :latitude, :longitude

  # Alias and Delegators
  alias_attribute :lat, :latitude
  alias_attribute :long, :longitude

  # Scopes
  scope :ubs_near, lambda { |coordinates|
    near(coordinates&.split(',')&.map(&:to_f), 5, units: :km, order: :distance)
  }

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
