class PostsController < ApplicationController
  def index
    @posts = Post.all
  end
  def new
    @post = Post.new
  end
  def create
    @post = Post.new(post_params)
    @post.save
    redirect_to root_path
  end
  def show
  end
  def edit
  end
  def update
  end
  def destroy
  end
  private
  def post_params
    params.require(:post).permit(:user_id, :image_id, :name, :introduction, :latitude, :longitude, :star)
  end
end
