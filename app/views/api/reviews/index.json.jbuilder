@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :title, :body, :rating
  end
end
