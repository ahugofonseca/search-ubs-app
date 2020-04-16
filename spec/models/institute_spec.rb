# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Institute, type: :model do
  let(:institute) { FactoryBot.build_stubed(:institute) }

  # Respond_to validations
  it { is_expected.to respond_to(:latitude) }
  it { is_expected.to respond_to(:longitude) }
  it { is_expected.to respond_to(:name) }
  it { is_expected.to respond_to(:address) }
  it { is_expected.to respond_to(:neighborhood) }
  it { is_expected.to respond_to(:city) }
  it { is_expected.to respond_to(:phone) }

  # Presence validations
  it { is_expected.to validate_presence_of(:latitude) }
  it { is_expected.to validate_presence_of(:longitude) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:address) }
  it { is_expected.to validate_presence_of(:city) }
  it { is_expected.to validate_presence_of(:phone) }

  # Uniqueness validations
  it { is_expected.to validate_uniqueness_of(:latitude) }
  it { is_expected.to validate_uniqueness_of(:longitude) }
end
