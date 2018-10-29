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

    it('should return an array of objects', async () => {
      const expected = 'object'
      const response = await request(server).get('/notes')
      expect(response.body.constructor === Array).toBe(true)
      expect(typeof response.body[0]).toBe(response.body[0] ? expected : "undefined")
    })

    it.skip('should return 3 initial notes in the body', async () => {
      const expected = 3
      const response = await request(server).get('/notes')
      expect(response.body.length).toEqual(expected)
    })

  })

  describe('GET notes (/notes/:id) endpoint', () => {

    const id = 1
    const noId = 100
    const url = `/notes/${id}`
    const noUrl = `/notes/${noId}`

    it('should run and return status code 200', async () => {
      const expected = 200
      const response = await request(server).get(url)
      expect(response.status).toEqual(expected)
    })

    it('should return a single note', async () => {
      const response = await request(server).get(url)
      expect(response.body.length).toEqual(1)
    })

    it('should return a "No notes here!" if no notes', async () => {
      const expected = 'No notes here!'
      const response = await request(server).get(noUrl)
      expect(response.body).toEqual(expected)
    })

  })

  describe('POST notes (/notes) endpoint', () => {
    const newNote = {
      title: 'Post Test 4',
      content: "This is a post test and its contents",
      comments: "This is the comment for this note"
    }

    const newNoteNoComments = {
      title: 'Post Test 4',
      content: "This is a post test"
    }

    it('should run and return status code 200', async () => {
      const expected = 200
      const response = await request(server)
        .post('/notes')
        .send(newNoteNoComments)
      expect(response.status).toEqual(expected)
    })

  })

  describe('DELETE notes (/notes/:id) endpoint', () => {

    const id = 5

    it('should run and return status code 200', async () => {
      const expected = 200
      const response = await request(server)
        .delete('/notes')
        .send({ id })
      expect(response.status).toEqual(expected)
    })

    it('should return id, error message if note is n/a'
    , async () => {
      const expected = id
      const response = await request(server)
        .delete('/notes')
        .send({ id })
      expect(response.body).toEqual(expected)
    })

  })

  describe('UPDATE notes (/notes/:id) endpoint', () => {

    const id = 6
    const noId = 100
    const url = `/notes/${id}`
    const noUrl = `/notes/${noId}`

    const oldNote = {
      title: 'New',
      content: "Note",
      comments: "Actually it's the old one"
    }

    const newNote = {
      title: 'EDITZ',
      content: "editssss",
      comments: "Tshhhhh",
      id: 6
    }

    beforeEach(() => {
      request(server).put(url).send(oldNote)
    })

    it('should run and return status code 200', async () => {
      const expected = 200
      const response = await request(server)
        .put(url)
        .send( newNote )
      expect(response.status).toEqual(expected)
    })

    it('should return the contents of newNote (defiend above)', async () => {
      const expected = newNote
      const response = await request(server)
        .put(url)
        .send( newNote )
      expect(response.body).toEqual(expected)
    })

  })



})
