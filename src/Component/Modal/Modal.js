import React from "react";
import "./Modal.css";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import {
  actionCloseStartModal,
  actionIsInit,
  actionShowStartModal
} from "../../Config/Action";

export class Modal extends React.PureComponent {
  handleCloseModal = () => {
    this.props.closeStartModal();
  };

  render() {
    return (
      <ReactModal
        isOpen={this.props.modal}
        contentLabel="START THE GAME"
        onRequestClose={this.handleCloseModal}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "grey"
          },
          content: {
            zIndex: 1000,
            color: "green"
          }
        }}
      >
        <p>START THE GAME!</p>
        <button onClick={this.handleCloseModal}>START</button>
      </ReactModal>
    );
  }
}
export default connect(
  state => ({
    modal: state.app.modal
  }),
  dispatch => ({
    showModal: () => dispatch(actionShowStartModal()),
    closeStartModal: () => dispatch(actionCloseStartModal()),
    init: () => dispatch(actionIsInit())
  })
)(Modal);
