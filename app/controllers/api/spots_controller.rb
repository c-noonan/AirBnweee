class Api::SpotsController < ApplicationController
  def new
    @spot = Spot.new
  end

  def create
    @spot = Spot.new(spot_params)
    @spot.image_url ||= ''
    if @spot.save
      render '/api/spots/show'
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end
  #
  # def edit
  # end
  #
  # def update
  # end

  def show
    @spot = Spot.find_by(id: params[:id])
  end

  def index
    @spots = Spot.all
  end

  def destroy
    @spot = Spot.find_by(id: params[:id])
    if @spot
      @spot.delete!
    else
      render json: ['That spot does not exist'], status: 422
    end
  end

  private

  def spot_params
    params.require(:spot).permit(:description, :lat, :long, :owner_id)
  end

end
