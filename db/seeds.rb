# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {
    name: "Leonardo",
    email: "random@guy.com",
    password: "password"
  },
  {
    name: "Random",
    email: "sup@dude.com",
    password: "password"
  },
  {
    name: "Cloud",
    email: "final@fantasy.com",
    password: "password"
  },
  {
    name: "Leonidas",
    email: "300@sparta.com",
    password: "password"
  },
])

reviews = Review.create([
  {
    user_id: 1,
		name: "Super Smash Bros",
  	image: "example of an image I guess",
		body: "Best way to lose friends"
  },
  {
    user_id: 1,
		name: "Dragon Ball Fighterz",
  	image: "example of another image",
		body: "Better than Marvel vs Capcom!"
  },
  {
    user_id: 2,
		name: "The Last Of Us",
  	image: "example of an image I guess",
		body: "Made me cry"
  },
  {
    user_id: 3,
		name: "Final Fantasy 7",
  	image: "example of another image",
		body: "Best game ever!"
  },
  {
    user_id: 4,
		name: "God Of War",
  	image: "example of another image",
		body: "SPARTAAAA!!!!!!!!!"
  },
])

comments = Comment.create([
  {
    "user_id": 1,
  	"review_id": 1,
  	"body": "This is a great review!"
  },
  {
    "user_id": 1,
  	"review_id": 3,
  	"body": "I love this game!"
  },
  {
    "user_id": 2,
  	"review_id": 1,
  	"body": "Nice!"
  },
  {
    "user_id": 3,
  	"review_id": 4,
  	"body": "Love it!"
  },
  {
    "user_id": 4,
  	"review_id": 2,
  	"body": "Amazing!"
  },
])

favorites = Favorite.create([
  {
    "user_id": 1,
	  "review_id": 2
  },
  {
    "user_id": 2,
	  "review_id": 2
  },
  {
    "user_id": 3,
	  "review_id": 1
  },
  {
    "user_id": 4,
	  "review_id": 3
  },
  {
    "user_id": 1,
	  "review_id": 4
  },
])

ratings = Rating.create([
  {
    "rate": 4,
    "review_id": 2,
    "user_id": 1,
  }
])
