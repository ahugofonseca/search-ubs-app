# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'FindUbs', type: :request do
  describe 'GET /index' do
    context 'when dont pass query paramenter' do
      it 'should return http unprocessable entity status' do
        response = get api_v1_find_ubs_path

        expect(response).to eq(422)
      end
    end

    context 'when pass query paramenter' do
      it 'should returns http success' do
        response = get api_v1_find_ubs_path(query: '-23.604936, -46.692999')

        expect(response).to eq(200)
      end
    end
  end
end
