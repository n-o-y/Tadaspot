FactoryBot.define do
  factory :post do
    name {Faker::Lorem.characters(number:10)}
    introduction {Faker::Lorem.characters(number:30)}
  end
end