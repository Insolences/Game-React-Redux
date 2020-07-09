import React from "react";
import "./App.css";
import World from "../World/World";
import { Preloader } from "../Preloader";
import { connect } from "react-redux";
import { actionIsInit } from "../../Config/Action";

export class App extends React.PureComponent {
  componentDidMount() {
    this.props.init();
  }
  render() {
    if (!this.props.isInit) {
      return <Preloader />;
    }
    return <World />;
  }
}

export default connect(
  state => ({
    isInit: state.app.isInit
  }),
  dispatch => ({
    init: () => dispatch(actionIsInit())
  })
)(App);
