class PagesController < ApplicationController
  def index # 'App'
    cookies[:user_id] = current_user.id
  end
end
