@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :price, :guests, :bedrooms, :bathrooms, :title, :lat, :long, :description
    json.image_url image_path(spot.image_url)
  end
end
