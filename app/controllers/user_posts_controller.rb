class UserPostsController < ApplicationController
  def index
    @UserPosts = UserPost.all 
  end
end
