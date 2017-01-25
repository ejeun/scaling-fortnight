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

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedCats)
  .then(cats => console.log(`Seeded ${cats.length} cats OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
