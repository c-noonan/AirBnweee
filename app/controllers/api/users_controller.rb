class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.image_url ||= ''
    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def edit
  # end
  #
  # def update
  # end
  #
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
