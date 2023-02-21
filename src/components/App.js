import React from 'react';
import './App.css';
import TaskList from './taskList.js'
import Form from './form.js'

class App extends React.Component {
  counter = 4
  minDate = new Date().toISOString().slice(0, 10)
  state = {
    tasks: [

    ]
  }

  changeDoneStatus = id => {
    const tasks = [...this.state.tasks]

    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({
      tasks
    })
  }

  deleteTask = id => {
    let tasks = [...this.state.tasks]

    tasks = tasks.filter(task => task.id !== id)

    this.setState({
      tasks
    })
  }


  addTask = (text, important, date) => {

    const add = {
      id: this.counter,
      text,
      important,
      date,
      active: true,
      finishDate: null
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, add]
    }))
    return true
  }
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <Form addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          changeDoneStatus={this.changeDoneStatus}
          deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
