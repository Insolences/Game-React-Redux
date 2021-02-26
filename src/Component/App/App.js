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
    this.props.eventShowStartModal();
  }

  render() {
    if (!this.props.isInit) {
      return <Preloader />;
    }
    return (
      <>
        {this.props.modalForStart ? (
          <Modal modalAction={this.props.modalValue} />
        ) : (
          <World />
        )}
      </>
    );
  }
}

export default connect(
  state => ({
    isInit: state.app.isInit,
    modalForStart: state.modal.modalForStart,
    modalValue: state.modal.value
  }),
  dispatch => ({
    eventShowStartModal: () => dispatch(actionShowStartModal()),
    init: () => dispatch(actionIsInit())
  })
)(App);
