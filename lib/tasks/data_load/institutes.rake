# frozen_string_literal: true

namespace :data_load do
  desc 'Get all UBS from data origin service, and register in database'
  task load_ubs: :environment do
    # Log details
    after_data_load = Institute.count
    puts 'DataLoad report ========================================='
    puts "  Total UBS present on the database: #{after_data_load}"

    # Run service with default data_origin: BrazilianGovPublicData::Ubs
    time = Benchmark.measure { Institutes::Creator.new.call }

    # Log datails
    puts "  Total UBS saved: #{Institute.count - after_data_load}"
    puts "  Total UBS present on the database now: #{Institute.count}"
    puts ''

    # Benchmark report
    puts 'Benchmark report ========================================='
    puts "  UserTime: #{time.utime}"
    puts "  SystemTime: #{time.stime}"
    puts "  TotalTime: #{time.total}"
    puts "  RealTime: #{time.real}"
  end
end
