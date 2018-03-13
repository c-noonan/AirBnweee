# class Api::BookingsController < ApplicationController
#   def new
#     @booking = Booking.new
#   end

#   def create
#     if current_user
#       @booking = Booking.new(booking_params)
#       @booking.user_id = current_user.id
#       @booking.spot_id ||= booking_params[:spot_id]
#       if @booking.save
#         render '/api/spots/show'
#       else
#         render json: @booking.errors.full_messages, status: 422
#       end
#     else
#       render json: ['Please log in!'], status: 403
#     end
#   end

#   # def edit
#   # end

#   def show
#     @booking = Booking.find(params[:id])
#   end

#   def index
#     @bookings = Booking.all
#   end

#   # def update
#   # end

#   # def destroy
#   #   @booking = Booking.find(params[:id])
#   #   if @booking
#   #     @booking.destroy!
#   #   else
#   #     render json: ['That booking does not exist'], status: 422
#   #   end
#   # end

#   private

#   def booking_params
#     params.require(:booking).permit(:start_date, :end_date, :spot_id, :guests)
#   end

# end


class Api::BookingsController < ApplicationController
  before_action :require_login

  def index
    @bookings = Booking.all
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    @booking.guests = booking_params[:guests]
    booking_status = valid_booking?(@booking.start_date, @booking.end_date)
    booked_status = already_booked?(@booking.start_date, @booking.end_date)
    if booking_status != 2
      render json: [booking_status], status: 422
    elsif booked_status == false
      render json: ["Sorry already booked!"], status: 422
    elsif @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking.destroy
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def valid_booking?(start_date, end_date)
    return 2 if start_date == nil
    return 2 if end_date == nil
    if start_date > end_date
      return ["Check in date must be before checkout date"];
    elsif start_date == end_date
      return ["Check in date cannot equal checkout date"];
    end
    2
  end

  def already_booked?(new_start_date, new_end_date)
    spot = Spot.find(params[:booking][:spot_id])
    return true if new_start_date == nil
    return true if new_end_date == nil
    spot.bookings.each do |booking|
      if new_start_date.between?(booking.start_date, booking.end_date) ||
        new_end_date.between?(booking.start_date, booking.end_date) ||
        booking.start_date.between?(new_start_date, new_end_date) ||
        booking.end_date.between?(new_start_date, new_end_date)
        return false
      end
    end
    true
  end

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :spot_id, :guests)
  end
end