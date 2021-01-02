class Api::UserConnectionsController < ApplicationController
  include CurrentUserConcern

  def index
    @user_connections = UserConnection.all
  end

  def create
    @user_connection = UserConnection.new(
      user_a_id: @current_user.id,
      user_b_id: user_connection_params[:connected_user_id]
    )

    if @user_connection.save
      render 'create'
    end 
  end

  def destroy
    @user_connection = UserConnection.find_by(user_b_id: params[:id])
    @connected_user = User.find(params[:id])

    if @user_connection && @connected_user
      UserConnection.delete_by(user_b_id: params[:id])
      @connected_user.save
    end 
  end

  private 

  def user_connection_params
    params.require(:user_connection).permit(:connected_user_id)
  end 
end 
