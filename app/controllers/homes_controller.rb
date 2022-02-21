class HomesController < ApplicationController
  def top
    @posts = Post.all.page(params[:page]).per(4)
    @post = Post.new
    gon.posts = Post.all
  end

end