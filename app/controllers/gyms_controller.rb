class GymsController < ApplicationController
  def index
    @gyms = Gym.all 
  end
end
