# frozen_string_literal: true

module Api
  module V1
    # Search near UBSs by lat and long
    class FindUbsController < ApplicationController
      def index
        @pagy, @ubs = pagy(Institute.all, items: params[:per_page])

        render json: Institute.default_presenter(@pagy, @ubs)
      end
    end
  end
end
