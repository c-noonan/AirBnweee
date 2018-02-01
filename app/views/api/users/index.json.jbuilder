@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.image_url image_path(user.image_url)
  end
end
