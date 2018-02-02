@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :price, :guests, :bedrooms, :bathrooms, :title
    json.image_url image_path(spot.image_url)
  end
end
