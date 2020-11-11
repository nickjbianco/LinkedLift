
if Rails.env == "production"
    # Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: ""  # production
else  
    Rails.application.config.session_store :cookie_store, key: "_authentication_app" # development
end 

