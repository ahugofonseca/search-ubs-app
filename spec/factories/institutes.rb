# frozen_string_literal: true

FactoryBot.define do
  factory :institute do
    latitude      { -19.7592007437737 }
    longitude     { -44.3148069192277 }
    name          { 'ESMERALDAS POSTO DE SAUDE TIJUCO' }
    address       { 'RUA ESMERALDAS, 64' }
    neighborhood  { 'TIJUCO' }
    city          { 'Esmeraldas' }
    phone         { '3135382160' }
  end
end
