class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.image_url ||= 'https://images.unsplash.com/photo-1464235173750-ae45ddb17e10?ixlib=rb-0.3.5&s=254fd3eec72c483de1322678b37af065&auto=format&fit=crop&w=1651&q=80'
    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def index
    @users = User.all
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user
      @user.delete!
    else
      render json: ['User or Id does not exist'], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
