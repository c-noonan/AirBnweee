class Api::ReviewsController < ApplicationController
  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find_by(id: params[:id])
  end
  #
  # def update
  # end
  #
  # def edit
  # end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review
      @review.delete!
    else
      render json: ['That review does not exist'], status: 422
    end
  end


  private

  def review_params
    params.require(:review).permit(:body)
  end

end
