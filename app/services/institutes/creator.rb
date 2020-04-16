# frozen_string_literal: true

module Institutes
  # Creator Institute from Public Data API of the Brazilian Gov data base
  class Creator
    def initialize(data_origin = BrazilianGovPublicData::Ubs)
      @data_origin = data_origin
    end

    def call
      create_institute_in_batch
    end

    private

    def create_institute_in_batch
      ubs_public_data.each { |ubs| create_institute(ubs) }
    end

    def create_institute(ubs)
      Institute.find_or_create_by(
        latitude: ubs['lat'].to_f,
        longitude: ubs['long'].to_f,
        name: ubs['no_fantasia'],
        address: "#{ubs['no_logradouro']}, #{ubs['nu_endereco']}",
        neighborhood: ubs['no_bairro'],
        city: ubs['cidade'],
        phone: ubs['nu_telefone'].gsub(/[^0-9A-Za-z]/, '')
      )
    end

    def ubs_public_data
      @ubs_public_data ||= @data_origin.new.call
    end
  end
end
