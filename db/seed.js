const db = require('APP/db')

const seedCats = () => db.Promise.map([
  {
    name: 'Meow',
    likes: ['bananas', 'hotdogs', 'ovals'],
    dislikes: ['boxes', 'dice', 'cubes'],
  },
  {
    name: 'Miao',
    likes: ['people', 'fashion', 'woman'],
    dislikes: ['red', 'building', 'outdoor'],
  }
  ], cat => db.model('cats').create(cat))

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCats)
  .then(cats => console.log(`Seeded ${cats.length} cats OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
