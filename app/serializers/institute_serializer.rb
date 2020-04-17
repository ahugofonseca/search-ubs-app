# frozen_string_literal: true

class InstituteSerializer < ApplicationSerializer
  attributes :id, :name, :address, :city, :geocode

  attributes :phone do |object|
    return object.phone if object.phone == 'Não informado'

    "(#{object.phone.first(2)}) #{object.phone.first(7).last(5)}-#{object.phone.last(4)}"
  end
end
