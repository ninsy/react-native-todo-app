import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = {
      todos: [],
      inputVal: ""
    };
  }
  onInputChange(event) {
    this.setState({ inputVal: event.target.value });
  }
  removeTodo(index) {
    this.state.todos.splice(index, 1);
    this.setState({ todos });
  }
  handleSubmit(e) {
    e.preventDefault();
    let tmp = [...this.state.todos, this.state.inputVal];
    this.setState({ todos: tmp, inputVal: "" });
  }
  render() {
    return (
      <div className="todo">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.inputVal}
          />
          <button type="submit">Add number</button>
        </form>
        <ul>
          {this.state.todos.map((x, i) =>
            <li key={i} onClick={() => this.removeTodo(i)}>
              {x}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Todo;
