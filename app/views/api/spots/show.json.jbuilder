json.spot do
  json.extract! @spot, :id, :description, :image_url, :price, :guests, :bedrooms, :bathrooms, :title
  json.reviews @spot.review_ids
  json.owner_id @spot.owner.id
  json.owner_username @spot.owner.username
  json.owner_image_url @spot.owner.image_url
end

json.reviews do
  @spot.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :author_id
      json.reviewer_id review.author.id
      json.reviewer_username review.author.username
      json.reviewer_image_url review.author.image_url
    end
  end
end
