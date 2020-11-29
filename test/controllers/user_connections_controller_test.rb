require 'test_helper'

class UserConnectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get user_connections_index_url
    assert_response :success
  end

  test "should get create" do
    get user_connections_create_url
    assert_response :success
  end

  test "should get destroy" do
    get user_connections_destroy_url
    assert_response :success
  end

end
