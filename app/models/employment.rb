class Employment < ApplicationRecord
    validates :start_date, presence: true 
    validates :title, presence: true 
    belongs_to :user
    belongs_to :gym 

    def start_date_representation
        start_date.strftime("%b %Y")
    end 

        def start_month 
        start_date.strftime("%B")
    end 

    def start_year
        start_date_representation.slice(4,7)
    end 

    def end_date_representation
        if end_date 
            end_date.strftime("%b %Y")
        else   
            "Present"
        end   
    end 

    def end_month 
        if end_date 
            end_date.strftime("%B")
        else  
            "Present"
        end 
    end  

    def end_year 
        if end_date 
            end_date_representation.slice(4, 7)
        else    
            "Present"
        end 
    end 
end