require 'test_helper'

class CurrentUserEmploymentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get current_user_employments_index_url
    assert_response :success
  end

end
