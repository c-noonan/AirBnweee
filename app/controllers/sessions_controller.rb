class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.save!
      login(@user)
      redirect_to api_users
    else
      flash.now[:errors] = ['Invalid username or password']
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
    logout
    redirect_to new_api_session
  end

end
