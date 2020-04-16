# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'FindUbs', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      response = get api_v1_find_ubs_path
      expect(response).to eq(200)
    end
  end
end
