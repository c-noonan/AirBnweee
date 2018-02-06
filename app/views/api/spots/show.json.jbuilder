json.spot do
  json.extract! @spot, :id, :description, :image_url, :price, :guests, :bedrooms, :bathrooms, :title
  json.reviews @spot.review_ids
end

# json.reviews do
#   @spot.reviews.each do |review|
#     json.set! review.id do
#       json.extract! review, :body, :rating, :author_id
#     end
#   end
# end
#
# json.reviewers do
#   @spot.reviewers.each do |reviewer|
#     json.extract! reviewer, :username, :image_url
#   end
# end
