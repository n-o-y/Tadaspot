FactoryBot.define do
  factory :user do
    id { 1 }
    name {Faker::Internet.username}
    email {Faker::Internet.email}
    password {Faker::Internet.password(min_length: 6)}
    is_active { TRUE }
  end
end