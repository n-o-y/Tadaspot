class HomesController < ApplicationController
  def top
    @posts = Post.all.page(params[:page]).per(5)
    @post = Post.new
    gon.posts = Post.all
    respond_to do |format|
      format.html
      format.js
    end
  end
end
