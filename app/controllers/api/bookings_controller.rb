class Api::BookingsController < ApplicationController
  def new
    @booking = Booking.new
  end

  def create
    if current_user
      @booking = Booking.new(booking_params)
      @booking.user_id = current_user.id
      if @booking.save
        render '/api/spots/show'
      else
        render json: @booking.errors.full_messages, status: 422
      end
    else
      render json: ['Please log in!'], status: 403
    end
  end

  # def edit
  # end

  def show
    @booking = Booking.find(params[:id])
  end

  def index
    @bookings = Booking.all
  end

  # def update
  # end

  # def destroy
  #   @booking = Booking.find(params[:id])
  #   if @booking
  #     @booking.destroy!
  #   else
  #     render json: ['That booking does not exist'], status: 422
  #   end
  # end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :spot_id, :guests)
  end

end
