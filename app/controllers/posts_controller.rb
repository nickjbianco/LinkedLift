class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def create 
    post = Post.new(valid_params)
    if post.save 
      @post = post 
    end 
  end 

  private 

  def valid_params
    params.permit(:body)
  end 
end
