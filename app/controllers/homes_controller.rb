class HomesController < ApplicationController
  def top
    @posts = Post.all
    @post = Post.new
  end
end
