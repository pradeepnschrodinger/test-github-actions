import React from "react";
import pkg from '../package.json'
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
    this.version = pkg.version;
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <p> Current version is: {this.version}</p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
