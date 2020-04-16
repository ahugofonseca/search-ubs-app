# frozen_string_literal: true

class InstituteSerializer < ApplicationSerializer
  attributes :id, :name, :address, :city, :phone, :geocode
end
