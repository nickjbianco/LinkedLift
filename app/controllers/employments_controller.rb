class EmploymentsController < ApplicationController
  def index
    @employments = Employment.all 
  end

  def create
    Employment.create(employment_params)
  end

  private 

  def employment_params
    params.require(:employment).permit(
      :title,
      :user,
      :gym
      )
  end 

end

