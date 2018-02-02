@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :description, :lat, :long, :owner_id, :price, :guests, :bedrooms, :bathrooms, :title
    json.image_url image_path(spot.image_url)
  end
end
