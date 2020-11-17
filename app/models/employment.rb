class Employment < ApplicationRecord
    validates :start_date, presence: true 
    validates :title, presence: true 
    belongs_to :user
    belongs_to :gym 

    def start_date_representation
        start_date.strftime("%b %Y")
    end 

    def end_date_representation
        if end_date 
            end_date.strftime("%b %Y")
        else   
            "Present"
        end   
    end 

end