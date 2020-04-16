# frozen_string_literal: true

# Abstract and principal controller to AP1
class ApplicationController < ActionController::API
  include Pagy::Backend
end
