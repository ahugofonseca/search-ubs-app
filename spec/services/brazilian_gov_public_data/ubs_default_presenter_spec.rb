# frozen_string_literal: true

require_relative '../../rails_helper'

RSpec.describe BrazilianGovPublicData::UbsDefaultPresenter do
  let!(:presenter_response) do
    BrazilianGovPublicData::UbsDefaultPresenter.new(ubs_public_data).data
  end

  it 'should return correctly formatted response' do
    expect(presenter_response).to eq(
      [{
        'gid' => '27',
        'co_cnes' => '2105462',
        'lat' => '-15.3429340536125',
        'long' => '-43.6703288759638',
        'no_fantasia' => 'UAPS NOVA ESPERANCA',
        'no_logradouro' => 'AV JOAO TEIXEIRA FILHO',
        'nu_endereco' => '566',
        'no_bairro' => 'CENTRO',
        'nu_telefone' => '(38)38331252',
        'co_cep' => '39508000',
        'uf' => 'MG',
        'cidade' => 'Jaíba',
        'ano_ubs_det' => '2016',
        'mes_ubs_det' => '5'
      }]
    )
  end
end
