# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
user1 = User.create( { username: 'courtney', password: 'password', image_url: 'https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9f43ca802159f80c4b1715a80477441&auto=format&fit=crop&w=1974&q=80' } )
user2 = User.create( { username: 'katie', password: 'password', image_url: 'https://images.unsplash.com/photo-1489899705168-17c923a57a6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70740fca6b6a48863ad3770ec71c2b9a&auto=format&fit=crop&w=634&q=80' } )
user3 = User.create( { username: 'alex', password: 'password', image_url: 'https://images.unsplash.com/photo-1502307941281-4447b53562f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=345bbc3edc569525e68b1e360929de02&auto=format&fit=crop&w=634&q=80' } )
user4 = User.create( { username: 'elise', password: 'password', image_url: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2710d756c14ca0d0e295ac2201bdd15c&auto=format&fit=crop&w=1351&q=80' } )
user5 = User.create( { username: 'kendall', password: 'password', image_url: 'https://images.unsplash.com/photo-1471017851983-fc49d89c57c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95bed2df50656fd7e4aa5924b250ff88&auto=format&fit=crop&w=1950&q=80' } )
user6 = User.create( { username: 'nathan', password: 'password', image_url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afb35d2683e102d67bcd70b87b100723&auto=format&fit=crop&w=1350&q=80' } )
user7 = User.create( { username: 'jordan', password: 'password', image_url: 'https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c16a2235cc17e78b037ad82ec3ab17c&auto=format&fit=crop&w=634&q=80' } )
user8 = User.create( { username: 'cliff', password: 'password', image_url: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=702&q=80' } )
user9 = User.create( { username: 'chris', password: 'password', image_url: 'https://images.unsplash.com/photo-1471565661762-b9dfae862dbe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df9e89a26072d94a6b9c86b5430eabd7&auto=format&fit=crop&w=1350&q=80' } )
user10 = User.create( { username: 'joe', password: 'password', image_url: 'https://images.unsplash.com/photo-1461938337379-4b537cd2db74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3046c519396259989fa04f66f0fe20e&auto=format&fit=crop&w=1301&q=80' } )
user11 = User.create( { username: 'username', password: 'password', image_url: 'https://images.unsplash.com/photo-1477814670986-8d8dccc5640d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6435253e6eba8ef565abd8953c319d17&auto=format&fit=crop&w=752&q=80' } )

Spot.delete_all
spot1 = Spot.create( { owner_id: user1.id, lat: 33.874853, long: -117.899078,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f890a0c2f29ada0a8dfc182dbfc0912&auto=format&fit=crop&w=959&q=80',
  price: 120, guests: 2, bedrooms: 2, bathrooms: 2, title: 'Gorgeous house in sunny California!' })
spot2 = Spot.create( { owner_id: user2.id, lat: 33.835940, long: -117.896322,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1511702771955-42b52e1cd168?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b8ce1412e0f8646fa9f794963ab897e&auto=format&fit=crop&w=1050&q=80',
  price: 23, guests: 4, bedrooms: 3, bathrooms: 2, title: 'Relaxing sunny apartment' })
spot3 = Spot.create( { owner_id: user3.id, lat: 33.819054, long: -117.930087,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1495754149474-e54c07932677?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36797b09c9261d94250ceb3425cab2fa&auto=format&fit=crop&w=1050&q=80',
  price: 98, guests: 3, bedrooms: 5, bathrooms: 2, title: 'Beautiful home in Anaheim' })
spot4 = Spot.create( { owner_id: user4.id, lat: 33.826496, long: -117.957650,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1505843694770-3461f546bd8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db17657261e1b3262e360cc96358cb17&auto=format&fit=crop&w=1190&q=80',
  price: 184, guests: 3, bedrooms: 2, bathrooms: 1, title: 'Come stay at our home!' })
spot5 = Spot.create( { owner_id: user5.id, lat: 33.804168, long: -117.940768,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91b874ce453385d8867cc98ee582fee3&auto=format&fit=crop&w=1055&q=80',
  price: 158, guests: 4, bedrooms: 4, bathrooms: 4, title: 'Home that oozes comfort' })
spot6 = Spot.create( { owner_id: user6.id, lat: 33.782979, long: -117.999340,
  description:'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe3391048aa6a5e7e0675015330416e8&auto=format&fit=crop&w=1189&q=80',
  price: 67, guests: 2, bedrooms: 1, bathrooms: 1, title: 'Cute apartment near Disneyland!' })
spot7 = Spot.create( { owner_id: user7.id, lat: 33.795865, long: -117.943180,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eef2ec2eb92ca06d154df5147fbae1fe&auto=format&fit=crop&w=1047&q=80',
  price: 240, guests: 4, bedrooms: 2, bathrooms: 1, title: 'Our house is perfect for you!' })
spot8 = Spot.create( { owner_id: user8.id, lat: 33.752906, long: -117.901490,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8ee660baa348701771b605ad2d15154&auto=format&fit=crop&w=1053&q=80',
  price: 397, guests: 5, bedrooms: 3, bathrooms: 4, title: 'Trendy home perfect for relaxing' })
spot9 = Spot.create( { owner_id: user9.id, lat: 33.789565, long: -117.865658,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1504113897779-231f76737a4e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f264bf40175453d2130f7d354122bfb6&auto=format&fit=crop&w=1050&q=80',
  price: 175, guests: 1, bedrooms: 1, bathrooms: 1, title: 'Unique comfort near the beach' })
spot10 = Spot.create( { owner_id: user10.id, lat: 33.821630, long: -117.767119,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81fa6e2c81cf9e4e1b7c51f18eef6eb0&auto=format&fit=crop&w=1050&q=80',
  price: 500, guests: 7, bedrooms: 5, bathrooms: 6, title: 'Fabulous French-inspired Château' })
spot11 = Spot.create( { owner_id: user11.id, lat: 33.831934, long: -117.843263,
  description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1493210977798-4f655ac200a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba16f7a4d01403185df43e9c56f9edbe&auto=format&fit=crop&w=862&q=80',
  price: 980, guests: 2, bedrooms: 1, bathrooms: 2, title: 'Eccentric downtown apartment' })
spot12 = Spot.create( { owner_id: user1.id, lat: 34.064525, long: -118.272600, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f890a0c2f29ada0a8dfc182dbfc0912&auto=format&fit=crop&w=959&q=80',
  price: 120, guests: 2, bedrooms: 2, bathrooms: 2, title: 'Gorgeous house in sunny California!' })
spot13 = Spot.create!( { owner_id: user2.id, lat: 34.077008, long: -118.364831,description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1511702771955-42b52e1cd168?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b8ce1412e0f8646fa9f794963ab897e&auto=format&fit=crop&w=1050&q=80',
  price: 23, guests: 4, bedrooms: 3, bathrooms: 2, title: 'Relaxing sunny apartment' })
spot14 = Spot.create( { owner_id: user3.id, lat: 34.096912, long: -118.282434, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1505843694770-3461f546bd8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db17657261e1b3262e360cc96358cb17&auto=format&fit=crop&w=1190&q=80',
  price: 184, guests: 3, bedrooms: 2, bathrooms: 1, title: 'Come stay at our home!' })
spot15 = Spot.create( { owner_id: user4.id, lat: 34.128179, long: -118.257715, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91b874ce453385d8867cc98ee582fee3&auto=format&fit=crop&w=1055&q=80',
  price: 158, guests: 4, bedrooms: 4, bathrooms: 4, title: 'Home that oozes comfort' })
spot16 = Spot.create( { owner_id: user5.id, lat: 34.143240, long: -118.297540, description:'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe3391048aa6a5e7e0675015330416e8&auto=format&fit=crop&w=1189&q=80',
  price: 67, guests: 2, bedrooms: 1, bathrooms: 1, title: 'Cute apartment near Universal Studios!' })
spot17 = Spot.create( { owner_id: user6.id, lat: 34.135852, long: -118.373414, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eef2ec2eb92ca06d154df5147fbae1fe&auto=format&fit=crop&w=1047&q=80',
  price: 240, guests: 4, bedrooms: 2, bathrooms: 1, title: 'Our house is perfect for you!' })
spot18 = Spot.create( { owner_id: user7.id, lat: 34.123347, long: -118.411867, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8ee660baa348701771b605ad2d15154&auto=format&fit=crop&w=1053&q=80',
  price: 397, guests: 5, bedrooms: 3, bathrooms: 4, title: 'Trendy home perfect for relaxing' })
spot19 = Spot.create( { owner_id: user8.id, lat: 34.169093, long: -118.327409, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81fa6e2c81cf9e4e1b7c51f18eef6eb0&auto=format&fit=crop&w=1050&q=80',
  price: 500, guests: 7, bedrooms: 5, bathrooms: 6, title: 'Fabulous French-inspired Château' })
spot20 = Spot.create( { owner_id: user9.id, lat: 34.173638, long: -118.364831, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1495754149474-e54c07932677?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36797b09c9261d94250ceb3425cab2fa&auto=format&fit=crop&w=1050&q=80',
  price: 98, guests: 3, bedrooms: 5, bathrooms: 2, title: 'Beautiful home in North Hollywood!' })
spot21 = Spot.create( { owner_id: user10.id, lat: 34.173917, long: -118.418969, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1493210977798-4f655ac200a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba16f7a4d01403185df43e9c56f9edbe&auto=format&fit=crop&w=862&q=80',
  price: 980, guests: 2, bedrooms: 1, bathrooms: 2, title: 'Eccentric downtown apartment' })
spot22 = Spot.create( { owner_id: user11.id, lat: 34.411372, long: -118.589105, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f890a0c2f29ada0a8dfc182dbfc0912&auto=format&fit=crop&w=959&q=80',
  price: 120, guests: 2, bedrooms: 2, bathrooms: 2, title: 'Gorgeous house in sunny California!' })
spot23 = Spot.create( { owner_id: user1.id, lat: 34.415904, long: -118.581895, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1511702771955-42b52e1cd168?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b8ce1412e0f8646fa9f794963ab897e&auto=format&fit=crop&w=1050&q=80',
  price: 23, guests: 4, bedrooms: 3, bathrooms: 2, title: 'Relaxing sunny apartment' })
spot24 = Spot.create( { owner_id: user2.id, lat: 34.411443, long: -118.568677, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1505843694770-3461f546bd8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db17657261e1b3262e360cc96358cb17&auto=format&fit=crop&w=1190&q=80',
  price: 184, guests: 3, bedrooms: 2, bathrooms: 1, title: 'Come stay at our home!' })
spot25 = Spot.create( { owner_id: user4.id, lat: 34.436577, long: -118.592109, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91b874ce453385d8867cc98ee582fee3&auto=format&fit=crop&w=1055&q=80',
  price: 158, guests: 4, bedrooms: 4, bathrooms: 4, title: 'Home that oozes comfort' })
spot26 = Spot.create( { owner_id: user5.id, lat: 34.443797, long: -118.570823, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eef2ec2eb92ca06d154df5147fbae1fe&auto=format&fit=crop&w=1047&q=80',
  price: 240, guests: 4, bedrooms: 2, bathrooms: 1, title: 'Our house is perfect for you!' })
spot27 = Spot.create( { owner_id: user6.id, lat: 34.429073, long: -118.568677, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8ee660baa348701771b605ad2d15154&auto=format&fit=crop&w=1053&q=80',
  price: 397, guests: 5, bedrooms: 3, bathrooms: 4, title: 'Trendy home perfect for relaxing' })
spot28 = Spot.create( { owner_id: user7.id, lat: 34.423480, long: -118.566102, description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81fa6e2c81cf9e4e1b7c51f18eef6eb0&auto=format&fit=crop&w=1050&q=80',
  price: 500, guests: 7, bedrooms: 5, bathrooms: 6, title: 'Fabulous French-inspired Château' })
spot29 = Spot.create( { owner_id: user8.id, lat: 34.437993, long: -118.562497,   description: 'This house has several bedrooms, several bathrooms, is extremely large and family friendly! It is the perfect home to relax and take a vacation from the chaos and hectic schedule of your every day life. Come stay at our lovely home and you will not be disappointed!',
  image_url: 'https://images.unsplash.com/photo-1493210977798-4f655ac200a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba16f7a4d01403185df43e9c56f9edbe&auto=format&fit=crop&w=862&q=80',
  price: 980, guests: 2, bedrooms: 1, bathrooms: 2, title: 'Eccentric downtown apartment' })

Review.delete_all
Review.create( { author_id: user6.id, spot_id: 2, body: '' })
