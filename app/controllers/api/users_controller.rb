class Api::UsersController < ApplicationController
  include CurrentUserConcern

  def index
    @users = User.where.not(id: @current_user.id)
  end

  def show 
    @user = User.find(params[:id])
  end 

  def update 
    @user = User.find(params[:id])

    if @user.id == @current_user.id 
      @user.update_attributes(update_params)
    end 
  end 
  
  def search 
    debugger
    @users = User.where("first_name LIKE ?", "%#{params[:search]}%").limit(5)
  end 

  private 

  def update_params 
    params.require(:user).permit(
      :first_name, 
      :last_name,
      :location, 
      :title
      )
  end 
end
