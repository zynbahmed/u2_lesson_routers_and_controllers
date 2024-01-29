// controllers/todos.js

const Todo = require('../models/todo');

const index = (req, res) => {
    const todos = Todo.getAll();
    const title = "Todos"
    res.render('todos/index', {
      todos 
    });
  };

  const show = (req, res) => {
    const todo = Todo.getOne(req.params.id);
    res.render('todos/show', {
        todo 
  });
  };

  module.exports = {
    index, show
  };