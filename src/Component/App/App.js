import React from "react";
import "./App.css";
import World from "../World/World";
import { Preloader } from "../Preloader";
import { connect } from "react-redux";
import { actionIsInit, actionShowStartModal } from "../../Config/Action";
import { Modal } from "../Modal";

export class App extends React.PureComponent {
  componentDidMount() {
    //imitation 'loading'
    setTimeout(() => {
      this.props.init();
    }, 4000);
    this.props.showModal();
  }

  render() {
    if (!this.props.isInit) {
      return <Preloader />;
    }
    return <>{this.props.modal ? <Modal /> : <World />}</>;
  }
}

export default connect(
  state => ({
    isInit: state.app.isInit,
    modal: state.app.modal
  }),
  dispatch => ({
    showModal: () => dispatch(actionShowStartModal()),
    init: () => dispatch(actionIsInit())
  })
)(App);
