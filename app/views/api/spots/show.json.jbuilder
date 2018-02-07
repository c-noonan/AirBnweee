json.spot do
  json.extract! @spot, :id, :description, :image_url, :price, :guests, :bedrooms, :bathrooms, :title
  json.reviews @spot.review_ids
end

json.reviews do
  @spot.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :body, :rating, :author_id
      json.reviewer_id review.author.id
      json.reviewer_username review.author.username
      json.reviewer_image_url review.author.image_url
    end
  end
end
#
# json.reviewers do
#   @spot.reviewers.each do |reviewer|
#     json.set! reviewer.id do
#       json.extract! reviewer, :id, :username, :image_url
#     end
#   end
# end
