class Api::GymsController < ApplicationController
  def index
    @gyms = Gym.all 
  end
end  

