class UsersController < ApplicationController
  include CurrentUserConcern

  def index
    @users = User.all 
  end

  def show 
    @user = User.find(params[:id])
  end 

  def update 
    user = User.find(params[:id])

    if user.id == @current_user.id 
      user.update_attributes(params)
    end 
  end 
  
end
