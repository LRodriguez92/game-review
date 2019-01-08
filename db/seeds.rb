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
  }
])

reviews = Review.create([
  {
    user_id: 1,
		name: "My first review",
  	image: "example of an image I guess",
		body: "blah blah blah review blah blah blah"
  },
  {
    user_id: 1,
		name: "My second review",
  	image: "example of another image",
		body: "blah blah blah review blah blah blah"
  }
])

comments = Comment.create([
  {
    "user_id": 1,
  	"review_id": 1,
  	"body": "This is a great review!"
  }
])
