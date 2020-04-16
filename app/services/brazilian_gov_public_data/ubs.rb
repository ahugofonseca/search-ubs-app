# frozen_string_literal: true

module BrazilianGovPublicData
  # Unidade basica de saude
  class Ubs
    RESOURCE_URL = 'http://i3geo.saude.gov.br/i3geo/ogc.php?service=WFS&version=1.0.0&request=GetFeature&typeName=ubs_funcionamento&outputFormat=JSON'

    def initialize(presenter = UbsDefaultPresenter)
      @presenter = presenter
    end

    def call
      request_response.success? ? response_formatted : []
    end

    private

    def response_formatted
      @presenter.new(request_response).data
    end

    def request_response
      @request_response ||= HTTParty.get(RESOURCE_URL)
    end
  end
end
