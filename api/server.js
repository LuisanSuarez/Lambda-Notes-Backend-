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
  console.log('START HERE');
  console.log(req.body);
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


module.exports = server;
