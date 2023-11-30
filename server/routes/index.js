const express = require('express')
const router = express.Router()

const Todo = require('../models/Todo.model')


router.get('/getAllTodos', (req, res, next) => {

    Todo
        .find()
        .then(foundTodos => res.json(foundTodos))
        .catch(err => next(err))
})

router.post('/addTodo', (req, res, next) => {

    const { text } = req.body

    Todo
        .create({ text })
        .then(createdTodo => res.json(createdTodo))
        .catch(err => next(err))
})


module.exports = router

