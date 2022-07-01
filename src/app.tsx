
import React, { Component } from "react";
import { Provider } from "react-redux";
import dva from "./utils/dva";
import models from "./models/index";
import "./app.scss";

const dvaApp = dva.createApp({
  initialState: {},
  models,
});

const store = dvaApp.getStore();

class App extends Component<any> {
  componentDidMount() {
    console.log('this.props', this.props);
    this.props.dispatch({
      type: ''
    })
  }
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}
export default App;