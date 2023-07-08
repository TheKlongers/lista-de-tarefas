import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
