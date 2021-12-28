# frozen_string_literal: true

require 'rails_helper'

describe 'test' do
  it 'ユーザ新規登録' do
    expect(FactoryBot.build(:user)).to be_valid
  end
end
describe 'test2' do
  it '新規投稿' do
    user = FactoryBot.create(:user)
    expect(FactoryBot.build(:post)).to be_valid
  end
end