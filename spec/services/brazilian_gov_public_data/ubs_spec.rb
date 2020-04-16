# frozen_string_literal: true

require_relative '../../rails_helper'

RSpec.describe BrazilianGovPublicData::Ubs do
  before(:all) do
    @ubs_public_data ||= BrazilianGovPublicData::Ubs.new.call
  end

  let!(:essentials_keys) do
    %w[lat long no_fantasia no_logradouro nu_endereco no_bairro nu_telefone cidade]
  end

  it 'should request successed' do
    expect(@ubs_public_data.any?).to be true
  end

  it 'should essentials keys' do
    keys = @ubs_public_data.sample.keys

    expect(keys).to include(*essentials_keys)
  end
end
