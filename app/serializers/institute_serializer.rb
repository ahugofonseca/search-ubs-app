# frozen_string_literal: true

class InstituteSerializer < ApplicationSerializer
  attributes :id, :name, :address, :city, :geocode

  attributes :phone do |object|
    "(#{object.phone.first(2)}) #{object.phone.first(7).last(5)}-#{object.phone.last(4)}"
  end
end
