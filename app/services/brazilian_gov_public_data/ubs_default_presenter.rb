# frozen_string_literal: true

module BrazilianGovPublicData
  # Responsable to format response endpoint
  class UbsDefaultPresenter
    def initialize(response)
      @response = response
    end

    def data
      response_formatted
    end

    private

    def response_formatted
      resources.map { |resource| resource.reduce({}, :merge) }
    end

    def resources
      @response['features'].map { |feature| feature['properties'] }
    end
  end
end

# Response Exemple:
# [
#   {
#     'gid' => '27',
#     'co_cnes' => '2105462',
#     'lat' => '-15.3429340536125',
#     'long' => '-43.6703288759638',
#     'no_fantasia' => 'UAPS NOVA ESPERANCA',
#     'no_logradouro' => 'AV JOAO TEIXEIRA FILHO',
#     'nu_endereco' => '566',
#     'no_bairro' => 'CENTRO',
#     'nu_telefone' => '(38)38331252',
#     'co_cep' => '39508000',
#     'uf' => 'MG',
#     'cidade' => 'Jaiba',
#     'ano_ubs_det' => '2016',
#     'mes_ubs_det' => '5'
#   }
# ]
