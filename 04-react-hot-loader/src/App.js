import React, { Component } from 'react';

export default class App extends Component {
  state = {
    count: 0,
  }

  render() {
    const { count } = this.state;

    return (
      <h1
        onClick={() => this.setState({ count: count + 1 })}
      >
        Click me!！ {count}
      </h1>
    );
  }
}
