// library
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/main-route";

// style
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    )
  }
}

export default App;
