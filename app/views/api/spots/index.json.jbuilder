@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :price, :guests, :bedrooms, :bathrooms, :title, :lat, :long, :description
    json.image_url image_path(spot.image_url)
  end
end

# @spots.each do |spot|
#   json.set! spot.id do
#     json.extract! spot, :id, :price, :guests, :bedrooms, :bathrooms, :title, :lat, :long, :description
#     json.image_url image_path(spot.image_url)
#     json.reviews spot.review_ids
#   end
#
#   json.reviews do
#     spot.reviews.each do |review|
#       json.set! review.id do
#         json.extract! review, :body, :rating, :author_id
#       end
#     end
#   end
# 
#   json.reviewers do
#     spot.reviewers.each do |reviewer|
#       json.extract! reviewer, :username, :image_url
#     end
#   end
#
# end
