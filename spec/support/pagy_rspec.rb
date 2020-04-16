# frozen_string_literal: true

module PagyRspec
  def pagy(data, items = nil)
    [
      OpenStruct.new(from: 1, items: (items || data.count), count: data.count),
      data
    ]
  end
end
