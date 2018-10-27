import React, { Component } from "react";
import "./App.css";
import TodoForm from "./components/todoForm";
import ListView from "./components/listView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewList: true
    };
  }
  render() {
    const { viewList } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {viewList ? <ListView /> : <TodoForm />}
        </header>
      </div>
    );
  }
}

export default App;
