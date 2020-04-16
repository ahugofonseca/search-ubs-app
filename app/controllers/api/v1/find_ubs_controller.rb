# frozen_string_literal: true

module Api
  module V1
    # Search near UBSs by lat and long
    class FindUbsController < ApplicationController
      before_action :check_query_params

      def index
        @pagy, @ubs = pagy(
          Institute.ubs_near(ubs_params[:query]),
          items: params[:per_page]
        )

        render json: Institute.default_presenter(@pagy, @ubs)
      end

      private

      def ubs_params
        params.permit(:query)
      end

      def check_query_params
        raise MissingQueryParameterError if ubs_params[:query].blank?
      end
    end
  end
end
