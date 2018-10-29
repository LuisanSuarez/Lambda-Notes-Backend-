const request = require('supertest');

const server = require('../api/server.js')

describe('server.js', () => {
  describe('root endpoint (/)', () => {

    it('should return statuso code 200', async () => {
      const expected = 200
      const response = await request(server).get('/')
      expect(response.status).toEqual(expected)
    })

  })

})
