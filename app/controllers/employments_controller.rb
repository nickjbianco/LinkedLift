class EmploymentsController < ApplicationController
  include CurrentUserConcern

  def index
    @employments = Employment.all 
  end

  def create
    @employment = Employment.new(employment_params)
    @employment.user_id = @current_user.id

    if @employment.save 
      render "create"
    end 
  end

  private 

  def employment_params
    params.require(:employment).permit(
      :title,
      :start_date, 
      :end_date,
      :gym_id
      )
  end 

end

