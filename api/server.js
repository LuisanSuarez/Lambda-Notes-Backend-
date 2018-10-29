const express = require('express');
const server = express();

server.use(express.json())

const db = require('../data/helpers/Model.js')

server.get('/', (req,res) => {
  res.status(200).json('running!')
})

server.get('/notes', (req,res) => {
  db.find()
    .then(notes => {
      res.status(200).json(notes)
    })
    .catch(err => {
      res.status(431).json(err)
    })
})


module.exports = server;
