import React, { Component } from "react";
import "./App.css";
import TodoForm from "./components/todoForm";
import ListView from "./components/listView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewList: true,
      todos: []
    };
  }
  showForm = () => {
    this.setState({
      viewList: false
    });
  };
  updateTodos = todos => {
    this.setState({ todos });
  };

  pushTodo = todo => {
    const { todos } = this.state;
    todos.push(todo);
    this.setState({todos, viewList : true});
  };
  render() {
    const { viewList, todos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {viewList ? (
            <ListView todos={todos} showForm={this.showForm} updateTodos={this.updateTodos} />
          ) : (
            <TodoForm pushTodo={this.pushTodo} />
          )}
        </header>
      </div>
    );
  }
}

export default App;
