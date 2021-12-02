class LikesController < ApplicationController
  def new
  end
  def create
    @post = Post.find(params[:post_id])
    like = current_user.likes.build(post_id: params[:post_id])
    like.save

    # redirect_to post_path(params[:post_id])
  end
  def destroy
    @post = Post.find(params[:post_id])
    like = Like.find_by(post_id: params[:post_id], user_id: current_user.id)
    like.destroy
    # redirect_to post_path(params[:post_id])
  end
  private
  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
