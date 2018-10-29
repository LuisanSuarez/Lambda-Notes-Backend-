const request = require('supertest');

const server = require('../api/server.js')

describe('server.js', () => {
  describe.skip('root endpoint (/)', () => {

    it('should return status code 200', async () => {
      const expected = 200
      const response = await request(server).get('/')
      expect(response.status).toEqual(expected)
    })

    it('should return "running!" in the body', async () => {
      const expected = "running!"
      const response = await request(server).get('/')
      expect(response.body).toEqual(expected)
    })

  })

  describe('GET notes (/notes) endpoint', () => {

    it('should run and return status code 200', async () => {
      const expected = 200
      const response = await request(server).get('/notes')
      expect(response.status).toEqual(expected)
    })

    it.only('should return an array of objects', async () => {
      const expected = 'object'
      const response = await request(server).get('/notes')
      expect(response.body.constructor === Array).toBe(true)
      expect(typeof response.body[0]).toBe(response.body[0] ? expected : "undefined")
    })

    it('should return 3 initial notes in the body', async () => {
      const expected = 3
      const response = await request(server).get('/notes')
      expect(response.body.length).toEqual(expected)
    })

  })

})
