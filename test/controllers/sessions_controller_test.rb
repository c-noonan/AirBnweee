require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get sessions_new_url
    assert_response :success
  end

  test "should get create" do
    get sessions_create_url
    assert_response :success
  end

  test "should get edit" do
    get sessions_edit_url
    assert_response :success
  end

  test "should get update" do
    get sessions_update_url
    assert_response :success
  end

  test "should get show" do
    get sessions_show_url
    assert_response :success
  end

  test "should get index" do
    get sessions_index_url
    assert_response :success
  end

  test "should get destroy" do
    get sessions_destroy_url
    assert_response :success
  end

end
