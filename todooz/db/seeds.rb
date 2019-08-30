# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Todo.destroy_all
  Todo.create(
    title: "Sleep",
    body: "In a bed!",
    done: false
  )
  Todo.create(
    title: "Eat",
    body: "Real food!",
    done: false
  )
  Todo.create(
    title: "Clean your house",
    body: "Including the bathroom!",
    done: false
  )
  Todo.create(
    title: "Homework",
    body: "aaaaaaaaaaaaaaaaa",
    done: false
  )
end
