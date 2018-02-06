@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :body, :rating, :author_id, :spot_id
    json.author do
      json.extract! :username
      json.image_url image_path(user.image_url)
    end
  end
end
