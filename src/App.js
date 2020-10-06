import React from "react";
import "./assets/css/style.css";

import "./App.css";
import Images from "./components/Images";

class App extends React.Component {
  constructor(props) {
    console.log("App constructor");
    super(props);
    this.state = { title: "Hello React 2", isShowing: false };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("App Mounted");
  }

  componentWillUnmount() {
    console.log("App Unmouted");
  }

  componentDidUpdate() {
    console.log("app Updated");
  }

  handleClick = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="my-4">{this.state.title}</div>
          <button
            onClick={this.handleClick}
            className="p-1 bg-blue-700 text-white my-2"
          >
            Toggle Image
          </button>

          {this.state.isShowing ? <Images /> : null}
        </div>
      </section>
    );
  }
}

// function App({ title }) {
//   return (
//     <div className="App">
//       <div className="bg-gray-600 text-white p-5  border">
//         My name is {title}
//       </div>
//     </div>
//   );
// }
export default App;
