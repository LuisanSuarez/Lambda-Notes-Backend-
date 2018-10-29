const express = require('express');
const server = express();

server.use(express.json())

const db = require('../data/helpers/Model.js')

server.get('/', (req,res) => {
  res.status(200).json('running!')
})

server.get('/notes', (req, res) => {
  db.find()
    .then(notes => {
      res.status(200).json(notes)
    })
    .catch(err => {
      res.status(431).json(err)
    })
})

server.post('/notes', (req, res) => {
  const { title, content } = req.body
  const comments = req.body.comments || null
  const note = { title, content }
  db.insert(note)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err)
    })
})

server.delete('/notes', (req, res) => {
  // return res.status(200).json({message: "testing"})
  const { id } = req.body;
  // const title = db.get()
  db.remove(id)
    .then(response => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.error(err);
      res.status(501).json(err)
    })
})

server.get('/notes/:id', (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then(note => {
      note[0]
      ? res.status(200).json(note)
      : res.status(200).json('No notes here!')
    })
    .catch(err => {
      console.log('CATCH');
      console.error(err);
      res.status(404).json(err)
    })
})

// server.delete('/notes/:id', (req, res) => {
  //
  // })

module.exports = server;
