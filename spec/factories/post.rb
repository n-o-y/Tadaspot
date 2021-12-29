FactoryBot.define do
  factory :post do
    id {Faker::Number.non_zero_digit}
    user_id { 1 }
    name {Faker::Lorem.characters(number:10)}
    introduction {Faker::Lorem.characters(number:30)}
    latitude {Faker::Address.latitude}
    longitude {Faker::Address.longitude}
    star {Faker::Number.between(from: 1, to: 5)}
  end
end