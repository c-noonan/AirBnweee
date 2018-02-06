json.extract! @review, :id, :body, :rating, :author_id, :spot_id
json.author do
  json.extract! :username
  json.image_url image_path(user.image_url)
end
