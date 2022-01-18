class PostsController < ApplicationController
  skip_before_action :authenticate_user!,only: [:show]
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
    gon.posts = Post.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to post_path(@post)
    else
      @posts = Post.all
      render :new
    end
  end

  def show
    @post = Post.find(params[:id])
    @posts =Post.all
    gon.posts = Post.all
    gon.post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
    gon.post = Post.find(params[:id])
  end

  def update
    post = Post.find(params[:id])
    post.update(post_params)
    redirect_to post_path(params[:id])
  end

  def destroy
    post = Post.find(params[:id])
    if post.destroy
      redirect_to root_path
    else
      render :show
    end
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :image, :name, :introduction, :latitude, :longitude, :star)
  end
end
