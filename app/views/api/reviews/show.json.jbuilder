json.extract! @review, :id, :body, :rating, :author_id, :spot_id
json.reviewer_image_url @review.author.image_url
json.reviewer_username @review.author.username
