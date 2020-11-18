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

  def show 
    @employment = Employment.find(params[:id])
  end 

  def update 
    @employment = Employment.find(params[:id])

    if @employment
      @employment.update_attributes(employment_params)
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

