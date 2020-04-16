# frozen_string_literal: true

# Abstract and principal controller to AP1
class ApplicationController < ActionController::API
  include Pagy::Backend

  around_action :handle_exception

  def handle_exception
    yield
  rescue MissingQueryParameterError
    handling_exception(
      :unprocessable_entity,
      'api.missing_query_parameter_error'
    )
  rescue ActiveRecord::RecordNotFound => e
    handling_exception(:not_found, 'api.not_found', e)
  rescue StandardError => e
    handling_exception(:internal_server_error, 'api.internal_error', e)
  end

  protected

  def handling_exception(status_code, message_title, exception = 'Não aplicável')
    error = [
      status: Rack::Utils::SYMBOL_TO_STATUS_CODE[status_code],
      message: I18n.t(message_title),
      exception: exception
    ]

    render json: { errors: error }, status: status_code
  end
end
