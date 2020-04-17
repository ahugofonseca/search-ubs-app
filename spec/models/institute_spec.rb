# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Institute, type: :model do
  let(:institute) { FactoryBot.build_stubbed(:institute) }

  # Respond_to validations
  it { is_expected.to respond_to(:latitude) }
  it { is_expected.to respond_to(:longitude) }
  it { is_expected.to respond_to(:name) }
  it { is_expected.to respond_to(:address) }
  it { is_expected.to respond_to(:neighborhood) }
  it { is_expected.to respond_to(:city) }
  it { is_expected.to respond_to(:phone) }

  # Alias attributes validations
  it { is_expected.to respond_to(:lat) }
  it { is_expected.to respond_to(:long) }

  # Presence validations
  it { is_expected.to validate_presence_of(:latitude) }
  it { is_expected.to validate_presence_of(:longitude) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:address) }
  it { is_expected.to validate_presence_of(:city) }

  # Uniqueness validations
  it { is_expected.to validate_uniqueness_of(:latitude) }
  it { is_expected.to validate_uniqueness_of(:longitude) }

  # Instance methods
  it 'should return object with lat and long from geocode' do
    keys = institute.geocode.keys

    expect(keys).to eq(%w[lat long])
  end

  context 'when call default_presenter class methods' do
    before(:all) do
      @pagy, @ubs = pagy(FactoryBot.build_stubbed_list(:institute, 5))
    end

    it 'should return hash with primaries keys present' do
      data = Institute.default_presenter(@pagy, @ubs)

      expect(data.keys).to eq(%i[current_page per_page total_entries entries])
    end

    it 'should return in entries data keys correctly' do
      data = Institute.default_presenter(@pagy, @ubs)
      entry_sample = data[:entries].sample

      expect(entry_sample.keys).to eq(%i[id name address city geocode phone])
    end
  end
end
