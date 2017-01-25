const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Cat = require('APP/db/models/cat');
const app = require('./start');

describe('/api/cats', () => {
  before('create a cat', () =>
    db.didSync
      .then(() =>
        Cat.create(
          {name: 'testing cat'
        })
      )
  )

  describe('you can get a cat', () => {
    it('GET /:id returns a cat', () =>
      request(app)
        .get(`/api/cats/1`)
        .expect(200)
    )

    it('POST creates a cat', () =>
      request(app)
        .post('/api/cats')
        .send({
          name: 'bethany',
          dislikes: ['internet', 'poptarts', 'rainbows']
        })
        .expect(201)
    )

    it('POST redirects to the cat it just made', () =>
      request(app)
        .post('/api/cats')
        .send({
          name: 'eva',
          likes: ['mechas', 'orange goo', 'angels'],
        })
        .redirects(1)
        .then(res => expect(res.body).to.contain({
          name: 'eva'
        }))
    )
  })
});
