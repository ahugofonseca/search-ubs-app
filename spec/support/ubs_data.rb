# frozen_string_literal: true

module UbsData
  def ubs_public_data_formatted
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
  end

  def ubs_public_data
    { 'type' => 'FeatureCollection',
      'features' => [
        { 'type' => 'Feature',
          'properties' => [
            { 'gid' => '27' },
            { 'co_cnes' => '2105462' },
            { 'lat' => '-15.3429340536125' },
            { 'long' => '-43.6703288759638' },
            { 'no_fantasia' => 'UAPS NOVA ESPERANCA' },
            { 'no_logradouro' => 'AV JOAO TEIXEIRA FILHO' },
            { 'nu_endereco' => '566' },
            { 'no_bairro' => 'CENTRO' },
            { 'nu_telefone' => '(38)38331252' },
            { 'co_cep' => '39508000' },
            { 'uf' => 'MG' },
            { 'cidade' => 'Jaíba' },
            { 'ano_ubs_det' => '2016' },
            { 'mes_ubs_det' => '5' }
          ],
          'geometry' => {
            'type' => 'Point',
            'coordinates' => [-43.670328875964, -15.342934053613]
          } }
      ] }
  end

  class UbsServiceStubed
    def call
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
    end
  end
end
