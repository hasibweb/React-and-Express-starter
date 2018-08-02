import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React And Express Starter</h1>
        </header>
        <Users />
      </div>
    );
  }
}

export default App;
