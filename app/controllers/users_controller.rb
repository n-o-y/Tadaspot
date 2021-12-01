class UsersController < ApplicationController
  def show
  end
  def edit
  end
  def update
  end
  def unsubscribe
  end
  def withdraw
    user = current_user
    user.update(is_active: false)
    reset_session
    redirect_to root_path
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :encrypted_password, :is_active)
  end
end