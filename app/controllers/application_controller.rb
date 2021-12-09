class ApplicationController < ActionController::Base
  before_action :authenticate_user!,except: [:top]

  before_action :configure_pemitted__parameters, if: :devise_controller?

  protected

  def configure_pemitted__parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
