class Api::ReviewsController < ApplicationController
  def new
    @review = Review.new
  end

  def create
    if current_user
      @review = Review.new(review_params)
      @review.author_id = current_user.id
      if @review.save
        render '/api/reviews/show'
      else
        render json: @review.errors.full_messages, status: 422
      end
    else
      render json: ['Please log in!'], status: 403
    end
  end

  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
  end
  #
  # def update
  # end
  #
  # def edit
  # end

  def destroy
    @review = Review.find(params[:id])
    if @review
      @review.delete!
    else
      render json: ['That review does not exist'], status: 422
    end
  end


  private

  def review_params
    params.require(:review).permit(:body, :spot_id)
  end

end
