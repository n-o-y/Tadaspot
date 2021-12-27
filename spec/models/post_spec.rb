# frozen_string_literal: true

require 'rails_helper'

describe 'Postモデルのテスト' do
  it "有効な投稿内容の場合は保存されるのか" do
    except(FactoryBot.build(:post)).to be_valid
  end
end