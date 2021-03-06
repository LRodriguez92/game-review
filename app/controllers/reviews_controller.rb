class ReviewsController < ApplicationController
  # before_action :authenticate_user, only: [:create, :update, :destroy]
  before_action :set_review, only: [:show, :update, :destroy]
  # GET /reviews

  def get_all
    render json: Review.all
  end

  def index
    @reviews = Review.all

    render json: @reviews.to_json(:include => [:ratings, {:comments => {:include => :user}}])
  end

  # GET /reviews/1
  def show
    render json: @review.to_json(:include => [:ratings, {:comments => {:include => :user}}])
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:name, :image, :body, :user_id)
    end
end
