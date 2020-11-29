class UserConnectionsController < ApplicationController
  include CurrentUserConcern

  def index
    @user_connections = UserConnection.all
  end

  def create
    debugger
    @user_connection = UserConnection.new(
      user_a_id: @current_user.id,
      user_b_id: user_connection_params[:connected_user_id]
    )

    if @user_connection.save
      render 'create'
    end 
  end

  def destroy
  end

  private 

  def user_connection_params
    params.require(:user_connection).permit(:connected_user_id)
  end 
end 
