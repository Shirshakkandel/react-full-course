import React, { Component } from "react";

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = { interval: null };
  }
  componentDidMount() {
    console.log("Images Comp mouted");
    this.setState({
      interval: setInterval(() => {
        console.log("Hello");
      }, 1000),
    });
  }
  componentWillUnmount() {
    console.log("images Unmouted");
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <div>
        <img src="https://th.bing.com/th/id/OIP.HaLHGQhiz_11jXtLy8bySAHaHa?w=194&h=194&c=7&o=5&pid=1.7"></img>
      </div>
    );
  }
}
