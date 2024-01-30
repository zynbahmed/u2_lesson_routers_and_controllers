const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];
 
 
  const getAll = () => {
    return todos;
  }

  const getOne = (id) => {
    return todos.find(todo => todo.id === parseInt(id));
  }

  const create = (todo) => {
    todo.id = Date.now() % 1000000;
    todo.done = false;
    todos.push(todo);
  }

  const deleteOne = (id) => {  
    const idx = todos.findIndex(todo => todo.id === parseInt(id));
    todos.splice(idx, 1);
};
 
  module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne
  };
  