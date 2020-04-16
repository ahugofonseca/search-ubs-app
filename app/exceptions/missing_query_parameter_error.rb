# frozen_string_literal: true

# Exception class when don't be passed a cnab file
class MissingQueryParameterError < StandardError
  def initialize(message_error = custom_message_error.to_s)
    super
  end

  private

  def custom_message_error
    I18n.t('api.missing_query_parameter_error')
  end
end
