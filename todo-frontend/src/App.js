import React, { Component } from 'react';
import './App.css';
import TodoForm from "./components/todoForm"



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <TodoForm />
        </header>
      </div>
    );
  }
}

export default App;
