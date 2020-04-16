# frozen_string_literal: true

require_relative '../../rails_helper'

RSpec.describe Institutes::Creator do
  before(:all) do
    @creator_service ||= Institutes::Creator.new(UbsData::UbsServiceStubed).call
  end

  let(:institute_count) { Institute.count }

  it 'should save new institute' do
    expect(institute_count > 0).to be true
  end

  it 'should save string data correctly' do
    response = UbsData::UbsServiceStubed.new.call

    expect(
      response.pluck('no_fantasia', 'no_bairro', 'cidade')
    ).to eq(Institute.pluck(:name, :neighborhood, :city))
  end

  it 'should save lat and long as float' do
    response = UbsData::UbsServiceStubed.new.call
    lat_lng = response.pluck('lat', 'long').flatten.map(&:to_f)

    expect(lat_lng).to eq(Institute.pluck(:latitude, :longitude).flatten)
  end

  it 'should save address with number' do
    response = UbsData::UbsServiceStubed.new.call
    address = response.pluck('no_logradouro', 'nu_endereco').flatten.join(', ')

    expect([address]).to eq(Institute.pluck(:address).flatten)
  end

  it 'should save phone without mask' do
    response = UbsData::UbsServiceStubed.new.call
    phone = response.pluck('nu_telefone').flatten.first.gsub(/[^0-9A-Za-z]/, '')

    expect([phone]).to eq(Institute.pluck(:phone).flatten)
  end
end
