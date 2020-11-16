class EmploymentsController < ApplicationController
  def index
    @employments = Employment.all 
  end

  def create
    employment = Employment.create!(
     title: params['employment']['title'],
     
    )
  end
end
