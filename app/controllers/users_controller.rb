class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      login(@user)
      redirect_to api_users
    else
      flash.now[:errors] = @user.errors.full_messages
      render :json
    end
  end

  def edit
  end

  def update
  end

  def show
  end

  def index
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user
      @user.delete!
    else
      flash.now[:errors] = ['User or Id does not exist']
      render :json
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
