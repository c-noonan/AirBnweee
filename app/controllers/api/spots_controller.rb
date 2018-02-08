class Api::SpotsController < ApplicationController
  # def new
  #   @spot = Spot.new
  # end
  #
  # def create
  #   @spot = Spot.new(spot_params)
  #   @spot.image_url ||= 'https://images.unsplash.com/photo-1491955478222-69ae25414368?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3dd10679b1804958a7e07a09172d2fc0&auto=format&fit=crop&w=750&q=80'
  #   if @spot.save
  #     render '/api/spots/show'
  #   else
  #     render json: @spot.errors.full_messages, status: 422
  #   end
  # end
  #
  # def edit
  # end
  #
  # def update
  # end

  def show
    @spot = Spot.find(params[:id])
    if @spot
      render :show
    else
      render json: ['This spot does not exist'], status: 404
    end
  end

  def index
    if params[:search]
      query_string = "%#{params[:search]}%"
      final_query_string = query_string.downcase
      @spots = Spot.where('title LIKE ? OR description LIKE ? OR lat LIKE ? OR long LIKE ?', final_query_string, final_query_string)
    else
      @spots = Spot.all
    end
  end

  # def destroy
  #   @spot = Spot.find(params[:id])
  #   if @spot
  #     @spot.delete!
  #   else
  #     render json: ['That spot does not exist'], status: 422
  #   end
  # end

  private

  def spot_params
    params.require(:spot).permit(:description, :lat, :long, :owner_id)
  end

end
