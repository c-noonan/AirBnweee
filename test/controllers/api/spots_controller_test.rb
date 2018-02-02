require 'test_helper'

class Api::SpotsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_spots_new_url
    assert_response :success
  end

  test "should get create" do
    get api_spots_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_spots_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_spots_update_url
    assert_response :success
  end

  test "should get show" do
    get api_spots_show_url
    assert_response :success
  end

  test "should get index" do
    get api_spots_index_url
    assert_response :success
  end

  test "should get destroy" do
    get api_spots_destroy_url
    assert_response :success
  end

end
