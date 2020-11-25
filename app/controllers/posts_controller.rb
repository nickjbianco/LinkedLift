class PostsController < ApplicationController
  include CurrentUserConcern

  def index
    @posts = Post.all
  end

  def create 
    @post = Post.new(valid_params)
    @post.user_id = @current_user.id 
    if @post.save 
      render "create"
    end 
  end 

  def destroy 
    @post = Post.find(params[:id])
  end 

  private 

  def valid_params
    params.require(:post).permit(:body)
  end 
end


