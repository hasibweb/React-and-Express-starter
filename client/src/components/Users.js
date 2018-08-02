import React, { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <ol>{this.state.users.map(usr => <li key={usr.id}>{usr.name}</li>)}</ol>
      </div>
    );
  }
}

export default Users;
