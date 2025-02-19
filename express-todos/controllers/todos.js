// controllers/todos.js

const Todo = require('../models/todo');

const index = (req, res) => {
    const todos = Todo.getAll();
    const title = "Todos"
    res.render('todos/index', {
      todos 
    });
  };

  const newTodo = (req, res) => {
    res.render('todos/new');
};

  const show = (req, res) => {
    const todo = Todo.getOne(req.params.id);
    res.render('todos/show', {
        todo 
  });
  };

  const create = (req, res) => {
    console.log(req.body)
    Todo.create(req.body); 
    res.redirect('/todos');
  }

  const deleteTodo = (req, res) => {
    Todo.deleteOne(req.params.id);
    res.redirect('/todos');
  }

  const editTodo = (req, res) => {
    const todo = Todo.getOne(req.params.id);
    res.render('todos/edit', {
        todo
    });
};

const update = (req, res) => {
  let todoId = req.params.id;
  let updatedTodo = req.body.todo;
  Todo.updateOne(todoId, updatedTodo);
  res.redirect('/todos');
};

  module.exports = {
    index, 
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit: editTodo,
    update
  };