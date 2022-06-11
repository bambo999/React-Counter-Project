import React, { Component } from "react";

class Main extends Component {
  state = {
    number: 0,
  };
  //onclick event for increment button
  increment = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  //onclick event for decrement button
  decrement = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };
  //onclick event for neutral button
  neutral = () => {
    this.setState({
      number: 0,
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div
          className="col-md-5"
          style={{ marginTop: "250px", border: "5px solid black" }}
        >
          <h1>React Counter</h1>
          <h1>{this.state.number}</h1>
          <button className="btn btn-success" onClick={this.increment}>
            Increment
          </button>
          <button className="btn btn-danger" onClick={this.decrement}>
            Decrement
          </button>
          <button className="btn btn-primary" onClick={this.neutral}>
            Neutral
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
